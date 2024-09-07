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
      <Text c="theme" fw={600} pb="sm" data-test-id="basic_information_label">
        Basic Information
      </Text>
      <Stack gap="lg">
        <Flex gap="md">
          <Box w={"100%"}>
            <Select
              name="basicInformation.gender"
              label="I identify my gender as"
              data={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              props={{
                placeholder: "--Select--",
              }}
            />
          </Box>
          <Box w={"100%"}>
            <TextInput
              label="Age"
              name="basicInformation.age"
              props={{
                placeholder: "Value",
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
            placeholder: "Leave a comment here",
          }}
          name="basicInformation.autoimmuneDisease.conditionDetails"
          label="Please specify (condition and symptoms)"
        />
      </Stack>
    </Box>
  );
};

export default BasicInformation;
