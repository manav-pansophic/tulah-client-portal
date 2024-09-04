import { FC, useMemo } from "react";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import { Controller, useFormContext } from "@pansophictech/hook-form";
import { Stack, Text } from "@pansophictech/base";
import { useShallowEffect } from "@pansophictech/base";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import "@mantine/tiptap/styles.css";

const TextEditor: FC<{ name: string; label: string }> = ({ name, label }) => {
  const { setValue, control, formState, getValues } = useFormContext();

  const errorMessage = useMemo(
    () => formState?.errors?.[name]?.message,
    [formState, name]
  );

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    onUpdate: ({ editor }) => {
      setValue(name, editor.getHTML() === "<p></p>" ? "" : editor.getHTML(), {
        shouldDirty: true,
      });
    },
  });

  useShallowEffect(() => {
    if (editor) {
      editor.commands.setContent(getValues(name));
    }
  }, [editor, getValues, name]);

  return (
    <>
      <Stack gap={0}>
        <Text pb={5} fw={600}>
          {label}
        </Text>
        <Controller
          name={name}
          control={control}
          render={({ field: { onBlur, value } }) => {
            return (
              <RichTextEditor editor={editor}>
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
            );
          }}
        />
        {errorMessage && (
          <Text
            size="var(--mantine-font-size-sm)"
            mt={8}
            c="var(--mantine-color-error)"
          >{`${errorMessage}`}</Text>
        )}
      </Stack>
    </>
  );
};

export default TextEditor;
