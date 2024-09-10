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
import { FC, useState } from "react";
import {
  DateInput,
  DatePickerInput,
  FormProvider,
  Select,
  useForm,
} from "@pansophictech/hook-form";

const SchedulePickup: FC<{
  isPicked: any;
  onBack: () => void;
  onScheduleClick : () => void;
  setScheduleDate: any;
  scheduleDate:any;
}> = ({ isPicked, onBack, setScheduleDate,onScheduleClick,scheduleDate }) => {
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });

  const getFormattedDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    } else {
      daySuffix = "th";
    }

    return `${month} ${day}${daySuffix}`;
  };

  const handleFormSubmit = (values: any) => {
    const selectedDate = values.pickupdate;
    const formattedDate = getFormattedDate(new Date(selectedDate));
    setScheduleDate(formattedDate);
    onScheduleClick();
  };
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        h="100%"
        gap="lg"
        p={"lg"}
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
                  onClick={() => methods.handleSubmit(handleFormSubmit)()}
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
