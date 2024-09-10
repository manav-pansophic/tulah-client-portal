import { Box, Button, Flex, Stack, Text } from "@pansophictech/base";
import {
  FormProvider,
  Select,
  Textarea,
  useForm,
} from "@pansophictech/hook-form";

export const AddInquiryModal = () => {
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
  });
  const handleFormSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <Box>
      <Text size="13px" pb={20} pt={0}>
        Share your questions or concerns with us, and we’ll get back to you.
      </Text>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Stack gap={10}>
            <Select name="x" label="Inquiry Type" data={[]} />
            <Textarea
              name="message"
              label="Message"
              props={{
                placeholder: "Start typing your concerns",
              }}
            />
          </Stack>
          <Flex justify={"space-between"} gap={10} pt={40} pb={10}>
            <Button
              fullWidth
              variant="outline"
              tt={"uppercase"}
              lts={"2px"}
              size="sm"
              radius={"lg"}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              tt={"uppercase"}
              lts={"2px"}
              size="sm"
              radius={"lg"}
            >
              Submit
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </Box>
  );
};
