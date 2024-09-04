import { useState, useMemo } from "react";
import { RichTextEditor, Link } from "@mantine/tiptap";
import "@mantine/tiptap/styles.css";
import { useEditor } from "@tiptap/react";
import { Controller, useFormContext } from "@pansophictech/hook-form";
import { ActionIcon, Stack, Text, TextInput } from "@pansophictech/base";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

function InputEditor({ name, label, props }: any) {
  const { setValue, control, formState, getValues } = useFormContext();
  const [isEditing, setIsEditing] = useState(false);

  // Initialize editor with content from form
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    onUpdate: ({ editor }) => {
      setValue(name, editor.getHTML() === "<p></p>" ? "" : editor.getHTML(), {
        shouldDirty: true,
      });
    },
  });

  const errorMessage = useMemo(
    () => formState?.errors?.[name]?.message,
    [formState, name]
  );

  // Function to strip HTML tags
  const stripHtmlTags = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const handleToggleEditor = () => {
    const currentContent = getValues(name) || "";

    if (!isEditing && editor) {
      // When switching to editor, set the current input value
      editor.commands.setContent(currentContent || "");
    } else {
      // When switching to input, strip HTML tags for plain text
      const plainText = stripHtmlTags(currentContent);
      setValue(name, plainText || "", { shouldDirty: true });
    }

    setIsEditing((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value = "", onBlur } }) => (
          <>
            {!isEditing ? (
              <TextInput
                label={label}
                value={stripHtmlTags(value ?? "")}
                onChange={(event) => {
                  const newValue = event.currentTarget.value || ""; // Default to empty string
                  onChange(newValue);
                  setValue(name, newValue, {
                    shouldDirty: true,
                  });
                }}
                rightSection={
                  <ActionIcon onClick={handleToggleEditor}>Aa</ActionIcon>
                }
                {...props}
              />
            ) : (
              <>
                <Stack gap={0}>
                  {label && (
                    <Text mb="sm" size="14px">
                      {label}
                    </Text>
                  )}
                  <RichTextEditor
                    editor={editor}
                    style={{
                      border: "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <RichTextEditor.Toolbar>
                      <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                      </RichTextEditor.ControlsGroup>

                      <RichTextEditor.ControlsGroup>
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                      </RichTextEditor.ControlsGroup>
                    </RichTextEditor.Toolbar>

                    <RichTextEditor.Content
                      onBlur={onBlur}
                      content={value}
                      pb={0}
                    />
                  </RichTextEditor>
                  <ActionIcon
                    onClick={handleToggleEditor}
                    style={{
                      position: "absolute",
                      top: 34,
                      right: 10,
                    }}
                  >
                    Aa
                  </ActionIcon>
                </Stack>
              </>
            )}
          </>
        )}
      />
      {errorMessage && (
        <Text
          size="var(--mantine-font-size-sm)"
          mt={8}
          c="var(--mantine-color-error)"
        >{`${errorMessage}`}</Text>
      )}
    </div>
  );
}

export default InputEditor;
