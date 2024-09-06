import { Button, Flex, Stack, Text } from "@pansophictech/base";
import { FormProvider, TextInput, useForm } from "@pansophictech/hook-form";
import { useAddNewGuestMutation } from "../../../services/guests/guestServices";
import { useEffect } from "react";

const GuestPopup = ({ closeAllModal }: any) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });

  const [addNewGuest, { isLoading, isSuccess, error }] =
    useAddNewGuestMutation();

  const handleFormSubmit = (values: any) => {
    addNewGuest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      closeAllModal();
    }
  }, [isSuccess]);

  return (
    <Stack>
      <Text size="xs">
        You’re welcome to bring additional guests with you, provided they arrive
        on the same dates as you.
      </Text>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Stack gap="xs">
            <TextInput
              name="firstName"
              props={{ placeholder: "Enter First Name" }}
            />
            <TextInput
              name="lastName"
              props={{ placeholder: "Enter Last Name" }}
            />
            <Flex justify={"flex-end"} gap="sm" pt="sm">
              <Button size="sm" radius="xl" className="layout" c="black">
                CANCEL
              </Button>
              <Button size="sm" radius="xl" type="submit">
                ADD
              </Button>
            </Flex>
          </Stack>
        </form>
      </FormProvider>
    </Stack>
  );
};

export default GuestPopup;
