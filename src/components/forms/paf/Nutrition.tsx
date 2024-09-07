import { Box, Flex, Stack, Text } from "@pansophictech/base";
import { CheckboxGroup, RadioGroup, TextInput } from "@pansophictech/hook-form";

const Nutrition = () => {
  const exp_significant_option = [
    { value: "yes-weight-gain", label: "Yes - weight gain" },
    { value: "yes-weight-loss", label: "Yes - weight loss" },
    { value: "no", label: "No" },
    { value: "unsure", label: "Unsure" },
  ];
  const radioOptionsDominate = [
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
  ];
  const radioOptionsBowelFunction = [
    { value: "regular", label: "Regular" },
    { value: "constipated", label: "Constipated" },
    { value: "diarrhea", label: "Diarrhea" },

    {
      value: "alternating-constipation",
      label: "Subject to Change i.e. alternating constipation and diarrhea",
    },
  ];
  const checkboxes_preference_option = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "gluten-free", label: "Gluten Free" },
    { value: "wheat-free", label: "Wheat Free" },
    { value: "dairy-free", label: "Dairy Free" },
    {
      value: "lactose-free",
      label: "Lactose Free",
    },
    {
      value: "any-other?",
      label: "Any Other?",
    },
  ];
  return (
    <Box>
      <Text data-test-id="nutrition-label" c="theme" fw={600} pb="sm">
        Nutrition
      </Text>
      <Stack gap="lg">
        <RadioGroup
          label="Have you experienced a significant change in weight over the prevoius 3-6 months?"
          name="expSignificant"
          options={exp_significant_option}
        />
        <Flex gap="md">
          <Box w="100%">
            <TextInput
              label="What is your height? (cm)"
              name="height"
              props={{
                placeholder: "Value",
                labelProps: {
                  "data-test-id": "height-label",
                },
              }}
            />
          </Box>
          <Box w="100%">
            <TextInput
              label="What is your weight? (kg)"
              name="weight"
              props={{
                placeholder: "Value",
                labelProps: {
                  "data-test-id": "weight-label",
                },
              }}
            />
          </Box>
        </Flex>
        <RadioGroup
          label="Your dominate side?"
          name="dominateSide"
          options={radioOptionsDominate}
        />
        <RadioGroup
          label="How good is your bowel function?"
          name="bowelFunction"
          options={radioOptionsBowelFunction}
        />
        <CheckboxGroup
          name="preference"
          inline={true}
          label="Please specify your diet preference?"
          options={checkboxes_preference_option}
        />
      </Stack>
    </Box>
  );
};

export default Nutrition;
