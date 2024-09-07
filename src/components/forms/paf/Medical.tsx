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
      <Text data-test-id="medical-title" c="theme" fw={600} pb="sm">
        Medical
      </Text>
      <Stack gap="lg">
        <Box>
          <Text data-test-id="procedure-q" pb="sm" size="sm">
            Have you ever undergone any surgical procedure(s). This may include
            minor (e.g. cataract, major (joint replacement) and or cosmetic?
          </Text>
          <Flex gap="md">
            <Box w="100%">
              <TextInput
                label="Procedure"
                name="procedure"
                props={{
                  placeholder: "Value",
                  labelProps: {
                    "data-test-id": "procedure-label",
                  },
                }}
              />
            </Box>
            <Box w="100%">
              <Select
                name="anesthesia_type"
                label="Type of Anesthesia (local, general, spinal)"
                data={[
                  { label: "Local", value: "local" },
                  { label: "General", value: "general" },
                  { label: "Spinal", value: "spinal" },
                ]}
                props={{
                  placeholder: "Select",
                  labelProps: {
                    "data-test-id": "anesthesia-type-label",
                  },
                }}
              />
            </Box>
            <Box w="100%">
              <Select
                name="anesthesia_year"
                label="Year"
                data={[
                  { label: "2021", value: "2021" },
                  { label: "2022", value: "2022" },
                  { label: "2023", value: "2023" },
                ]}
                props={{
                  placeholder: "Select",
                  labelProps: {
                    "data-test-id": "anesthesia-year-label",
                  },
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
            data-test-id="add-more-button"
            p={0}
            styles={{ label: { padding: 0 } }}
          >
            <RiAddLine size={15} />
            Add More
          </Button>
        </Box>
        <Box>
          <Text data-test-id="medication-q" pb="sm" size="sm">
            Do you take any prescription medications, vitamins/minerals or
            herbal supplements specify below
          </Text>
          <Flex gap="md">
            <Box w="100%">
              <TextInput
                label="Name of Medication/ Supplement"
                name="medication-name"
                props={{
                  placeholder: "Value",
                  labelProps: {
                    "data-test-id": "medication-name-label",
                  },
                }}
              />
            </Box>
            <Box w="100%">
              <TextInput
                label="Strength of Medication"
                name="strength-medication"
                props={{
                  placeholder: "Value",
                  labelProps: {
                    "data-test-id": "strength-label",
                  },
                }}
              />
            </Box>
            <Flex w="100%" gap={"sm"}>
              <Box w="100%">
                <TextInput
                  label="Year"
                  name="year"
                  props={{
                    placeholder: "Value",
                    labelProps: {
                      "data-test-id": "year-label",
                    },
                  }}
                />
              </Box>
              <Box w="100%">
                <DateInput
                  label="Start date (duration)"
                  name="start-date"
                  props={{
                    placeholder: "Select",
                    labelProps: {
                      "data-test-id": "start-date-label",
                    },
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
            styles={{ label: { padding: 0 } }}
            data-test-id="add-more-button2"
          >
            <RiAddLine size={15} />
            Add More
          </Button>
        </Box>
        <CheckboxGroup
          name="skin_issues"
          inline={true}
          label="Do you have any existing medical conditions or history of problems with your health?"
          options={checkoption_skinissues}
        />
        <TextInput
          name="leave_comment"
          props={{
            placeholder: "Leave a comment here",
            labelProps: {
              "data-test-id": "leave-comment-label",
            },
          }}
        />
        <Textarea
          props={{
            placeholder: "Leave a comment here",
            labelProps: {
              "data-test-id": "further_details-label",
            },
          }}
          name="further_details"
          label="Feel free to add any further details below"
        />
      </Stack>
    </Box>
  );
};

export default Medical;
