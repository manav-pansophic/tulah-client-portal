import { Box, Flex, Stack, Text } from "@pansophictech/base";
import {
  Checkbox,
  Textarea,
  TextInput,
  DateInput,
} from "@pansophictech/hook-form";
import { RiCalendarLine } from "@remixicon/react";

const AdditionalInformation = () => {
  return (
    <Box
      w="100%"
      data-el="additional_information"
      data-el-value="Additional Information"
      data-test-id="additional_information"
    >
      <Text data-test-id="additional-title" c="theme" fw={600} pb="sm">
        Additional Information
      </Text>
      <Stack>
        <Textarea
          props={{
            placeholder: "Leave a comment here",
            labelProps: {
              "data-test-id": "reactmedication-label",
            },
          }}
          name="additionalInfo.condition_symptoms"
          label="Please share any additional vital information about your health and wellbeing that we should know to provide the best possible care and support"
        />
        <Flex gap="md">
          <Box w="100%">
            <TextInput
              props={{
                placeholder: "Value",
                labelProps: {
                  "data-test-id": "emergency-contact-label",
                },
              }}
              label="Emergency contact (name)"
              name="additionalInfo.emergency_contact.name"
            />
          </Box>
          <Box w="100%">
            <TextInput
              name="phone_number"
              label="Phone Number"
              props={{
                labelProps: {
                  "data-test-id": "phone_number-label",
                },
              }}
            />
          </Box>
          {/* <Box w="100%">
            <InputPhone name="additionalInfo.phone_number" label="Phone Number" />
          </Box> */}
          <Box w="100%">
            <DateInput
              label="Date"
              name="additionalInfo.date"
              props={{
                "data-test-id": "date",
                placeholder: "Select",
                rightSection: <RiCalendarLine />,
                labelProps: {
                  " data-test-id": "date-label",
                },
              }}
            />
          </Box>
        </Flex>
        <Box mt="md">
          <Checkbox
            props={{
              defaultChecked: false,
              "data-test-id": "knowlege-label",
            }}
            label="I hereby declare that the information provided above is true to the best of my knowledge. I fully understand that I am a partner in my health and wellness journey, 
supported by the Tulah team. I am committed to working towards my health and wellbeing goals, prioritizing my time and activities to achieve them."
            name="additionalInfo.knowledge"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default AdditionalInformation;
