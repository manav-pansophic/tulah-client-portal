import { Box, Flex, Stack, Text } from "@pansophictech/base";
import {
  CheckboxGroup,
  RadioGroup,
  Textarea,
  TextInput,
  Select,
} from "@pansophictech/hook-form";

const BasicInformation = () => {
  const checkboxes_looking_experience = [
    { value: "de_stress", label: "De-stress" },
    { value: "detox", label: "Detox" },
    { value: "weight_management", label: "Weight Management" },
    { value: "improve_fitness", label: "Improve Fitness" },
    { value: "life_optimization", label: "Life Optimization" },
    {
      value: "health_condition",
      label: "Heal /Improve Chronic Health Condition (specify)",
    },
    {
      value: "wellbeing_goal",
      label: "Any other specific health and wellbeing goal(s)",
    },
  ];

  const radio_options_diagnosed = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  return (
    <Box>
      <Text data-test-id="basic-info-form-title" c="theme" fw={600} pb="sm">
        Basic Information
      </Text>
      <Stack gap="lg">
        <Flex gap="md">
          <Box w={"100%"}>
            <Select
              name="basicInformation.gender"
              label="I identify my gender as"
              data={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              props={{
                required:true,
                placeholder: "--Select Gender--",
                // "data-test-id": "identify-gender",
                labelProps: {
                  "data-test-id": "identify-gender-label",
                },
              }}
            />
          </Box>
          <Box w={"100%"}>
            <TextInput
              label="Age"
              name="basicInformation.age"
              props={{
                required:true,
                placeholder: "Enter Age",
                "data-test-id": "age",
                labelProps: {
                  "data-test-id": "age-label",
                },
                
              }}
            />
          </Box>
        </Flex>
        <CheckboxGroup
          name="basicInformation.goals"
          inline={true}
          label="What are you looking to experience at tulah?"
          options={checkboxes_looking_experience}
        />
        <RadioGroup
          name="basicInformation.autoimmuneDisease.diagnosed"
          label="Have you ever been diagnosed with an autoimmune disease?"
          options={radio_options_diagnosed}
        />
        <Textarea
          props={{
            required:true,
            placeholder: "Leave a comment here",
            "data-test-id": "leave-comment",
            labelProps: {
              "data-test-id": "leave-comment-label",
            },
          }}
          name="basicInformation.autoimmuneDisease.conditionDetails"
          label="Please specify (condition and symptoms)"
        />
      </Stack>
    </Box>
  );
};

export default BasicInformation;
