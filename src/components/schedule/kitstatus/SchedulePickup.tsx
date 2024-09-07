import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Text,
} from "@pansophictech/base";
import {
  RiArrowLeftSLine,
  RiCalendarEventLine,
  RiLock2Fill,
} from "@remixicon/react";
import { FC } from "react";
import {
  DateInput,
  DatePickerInput,
  FormProvider,
  Select,
  useForm,
} from "@pansophictech/hook-form";

const SchedulePickup: FC<{
  isPicked: any;
  onSubmitClick: () => void;
  onBack: () => void;
}> = ({ isPicked, onSubmitClick, onBack }) => {
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        h="100%"
        gap="lg"
        bg="var(--mantine-color-theme-0)"
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleFormSubmit)}
            style={{ height: "100%" }}
          >
            <Box pos="relative" h="100%">
              <Box>
                <Flex gap="md" pb="sm">
                  <ActionIcon onClick={onBack}>
                    <RiArrowLeftSLine color="var(--mantine-color-theme-6) " />
                  </ActionIcon>
                  <Text
                    data-test-id="schedule-title"
                    c="theme"
                    fw={600}
                    lts={5}
                    tt="uppercase"
                  >
                    Schedule pickup
                  </Text>
                </Flex>
                <DateInput
                  name="pickupdate"
                  label="Pickup Date"
                  props={{
                    placeholder: "dd/mm/yyyy",
                    rightSection: <RiCalendarEventLine />,
                    w: "100%",
                    "data-test-id": "pickupdate",
                    labelProps: {
                      "data-test-id": "pickupdate-label",
                    },
                  }}
                />

                {/* <Select name="Guests" /> */}
              </Box>
              <Box pos="absolute" bottom="0px" right="0px">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  radius={"xl"}
                  mr={10}
                  data-test-id="reset-button"
                >
                  Reset
                </Button>
                <Button
                  onClick={onSubmitClick}
                  type="submit"
                  size="lg"
                  radius="xl"
                  data-test-id="submit-button"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Flex>
    </>
  );
};

export default SchedulePickup;
