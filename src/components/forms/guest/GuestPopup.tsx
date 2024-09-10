import { Button, Flex, Stack, Text } from "@pansophictech/base";
import { FormProvider, TextInput, useForm } from "@pansophictech/hook-form";
import { useEffect } from "react";
import { useAddNewGuestMutation } from "../../../services/guests/guestServices";

const GuestPopup = ({ closeAllModal }: any) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });
  const v_id = sessionStorage.getItem("visitors_id");

  const [addNewGuest, { isSuccess }] = useAddNewGuestMutation();

  const handleFormSubmit = (values: any) => {
    addNewGuest({
      firstName: values.firstName,
      lastName: values.lastName,
      visitorId: v_id,
    });
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
              props={{
                placeholder: "Enter First Name",
                "data-test-id": "firstname-guest",
                labelProps: {
                  "data-test-id": "firstname-guest-label",
                },
              }}
            />
            <TextInput
              name="lastName"
              props={{
                placeholder: "Enter Last Name",
                "data-test-id": "lastname-guest",
                labelProps: {
                  "data-test-id": "lastname-guest-label",
                },
              }}
            />
            <Flex justify={"flex-end"} gap="sm" pt="sm">
              <Button
                data-test-id="guest-cancel-button"
                size="sm"
                radius="xl"
                className="layout"
                c="black"
                onClick={()=>closeAllModal()}
              >
                CANCEL
              </Button>
              <Button
                data-test-id="guest-add-button"
                size="sm"
                radius="xl"
                type="submit"
              >
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
