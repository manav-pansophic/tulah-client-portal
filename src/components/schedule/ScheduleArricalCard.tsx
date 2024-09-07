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

const ScheduleArricalCard: FC<{
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
      <Flex direction="column" justify="space-between" h="100%" gap="lg">
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
                    data-test-id="schedule-arrival-title"
                    c="theme"
                    fw={600}
                    lts={5}
                    tt="uppercase"
                  >
                    Schedule your Arrival
                  </Text>
                </Flex>
                <Grid gutter={20} mt={"md"}>
                  <Grid.Col span={{ base: 12, sm: 12, lg: 6 }}>
                    <DateInput
                      name="checkin"
                      label="Check In Date"
                      props={{
                        placeholder: "dd/mm/yyyy",
                        rightSection: <RiCalendarEventLine />,
                        labelProps: {
                          "data-test-id": "checkin-date-label",
                        },
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 12, lg: 6 }}>
                    <DateInput
                      name="checkout"
                      label="Check Out Date"
                      props={{
                        placeholder: "dd/mm/yyyy",
                        rightSection: <RiCalendarEventLine />,
                        labelProps: {
                          "data-test-id": "checkout-date-label",
                        },
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 12, lg: 6 }}>
                    <Select
                      name="guests"
                      label="Guests"
                      data={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                      ]}
                      props={{
                        "data-test-id": "guests",
                        labelProps: {
                          "data-test-id": "guests-label",
                        },
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 12, lg: 6 }}>
                    <Select
                      name="room"
                      label="Rooms"
                      data={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                      ]}
                      props={{
                        "data-test-id": "rooms",
                        labelProps: {
                          "data-test-id": "rooms-label",
                        },
                      }}
                    />
                  </Grid.Col>
                </Grid>

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

export default ScheduleArricalCard;
