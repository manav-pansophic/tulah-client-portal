import { Box, Button, Flex, Stack, Text } from "@pansophictech/base";
import {
  CheckboxGroup,
  DateInput,
  Select,
  Textarea,
  TextInput,
} from "@pansophictech/hook-form";
import { RiAddLine, RiCalendarEventLine } from "@remixicon/react";

const Medical = () => {
  const checkoption_skinissues = [
    { value: "asthma", label: "Asthma" },
    { value: "cancer", label: "Cancer" },
    { value: "diabetes", label: "Diabetes" },
    { value: "dementia", label: "Dementia/ memory problems" },
    {
      value: "disturbances",
      label: "Emotional disturbances e.g. anxiety, depression, PTSD",
    },
    { value: "high-blood-pressure", label: "High blood pressure" },
    { value: "heart-attack-stroke", label: "History of heart attack, stroke" },
    { value: "seizures", label: "Seizures" },
    { value: "shortness-of-breath", label: "Shortness of breath" },
    { value: "thyroid-issues", label: "Thyroid issues" },
    { value: "others", label: "Others" },
  ];
  return (
    <Box>
      <Text c="theme" fw={600} pb="sm">
        Medical
      </Text>
      <Stack gap="lg">
        <Box>
          <Text pb="sm" size="sm">
            Have you ever undergone any surgical procedure(s). This may include
            minor (e.g. cataract, major (joint replacement) and or cosmetic?
          </Text>
          <Flex gap="md">
            <Box w="100%">
              <TextInput
                label="Procedure"
                name="medical.surgical_procedure"
                props={{
                  placeholder: "Value",
                }}
              />
            </Box>
            <Box w="100%">
              <Select
                name="medical.surgical_anesthesia_type"
                label="Type of Anesthesia (local, general, spinal)"
                data={[
                  { label: "Local", value: "local" },
                  { label: "General", value: "general" },
                  { label: "Spinal", value: "spinal" },
                ]}
                props={{
                  placeholder: "Select",
                }}
              />
            </Box>
            <Box w="100%">
              <Select
                name="medical.surgical_year"
                label="Year"
                data={[
                  { label: "2021", value: "2021" },
                  { label: "2022", value: "2022" },
                  { label: "2023", value: "2023" },
                ]}
                props={{
                  placeholder: "Select",
                }}
              />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Button
            type="button"
            variant="transparent"
            data-el="button_addmore"
            data-el-val="addmore"
            size="compact-sm"
            p={0}
          >
            <RiAddLine size={15} />
            Add More
          </Button>
        </Box>
        <Box>
          <Text pb="sm" size="sm">
            Do you take any prescription medications, vitamins/minerals or
            herbal supplements specify below
          </Text>
          <Flex gap="md">
            <Box w="100%">
              <TextInput
                label="Name of Medication/ Supplement"
                name="medical.suppliment_name"
                props={{
                  placeholder: "Value",
                }}
              />
            </Box>
            <Box w="100%">
              <TextInput
                label="Strength of Medication"
                name="medical.suppliment_strength"
                props={{
                  placeholder: "Value",
                }}
              />
            </Box>
            <Flex w="100%" gap={"sm"}>
              <Box w="100%">
                <TextInput
                  label="Year"
                  name="medical.suppliment_year"
                  props={{
                    placeholder: "Value",
                  }}
                />
              </Box>
              <Box w="100%">
                <DateInput
                  label="Start date (duration)"
                  name="medical.suppliment_start_date"
                  props={{
                    placeholder: "Select",
                    rightSection: <RiCalendarEventLine />,
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Button
            type="button"
            variant="transparent"
            data-el="button_addmore"
            data-el-val="addmore"
            size="compact-sm"
            p={0}
          >
            <RiAddLine size={15} />
            Add More
          </Button>
        </Box>
        <CheckboxGroup
          name="medical.skin_issues"
          inline={true}
          label="Do you have any skin issues?"
          options={checkoption_skinissues}
        />
        <TextInput
          name="medical.leave_comment"
          props={{
            placeholder: "Leave a comment here",
          }}
        />
        <Textarea
          props={{
            placeholder: "Leave a comment here",
          }}
          name="medical.further_details"
          label="Feel free to add any further details below"
        />
      </Stack>
    </Box>
  );
};

export default Medical;
