import { Button, Stack } from "@pansophictech/base";
import { MIME_TYPES } from "@pansophictech/dropzone";
import FileUploadAndPreview from "./FileUploadAndPreview";
import { FormProvider, useForm } from "@pansophictech/hook-form";

const GnomeFileUploadForm = () => {
  const GNOME_TYPE = {
    TYPE: [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.pdf],
    MESSAGE: ".png | .jpeg | .pdf",
  };

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: { diffCurrAddress: false },
  });

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Stack gap="sm">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <FileUploadAndPreview
            name="gnome_type"
            accept={GNOME_TYPE.TYPE}
            allowedMessage={GNOME_TYPE.MESSAGE}
            cardHeight={10}
            subName="Upload report"
            fileDesc="File Type: PDF and PNG
Max Size: 100 MB"
          />
        </form>
      </FormProvider>
      <Button radius={"xl"} size="sm">
        Submit for Approval
      </Button>
    </Stack>
  );
};

export default GnomeFileUploadForm;
