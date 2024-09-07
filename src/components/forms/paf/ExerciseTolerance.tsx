import { Box, Stack, Text } from "@pansophictech/base";
import { CheckboxGroup, RadioGroup, Textarea } from "@pansophictech/hook-form";

const ExerciseTolerance = () => {
  const radioOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const checkboxes = [
    { value: "pain-arthritis", label: "Pain/Arthritis" },
    { value: "chest-pain", label: "Chest Pain" },
    { value: "breathlessness", label: "Breathlessness" },
  ];
  return (
    <Box>
      <Text c="theme" fw={600} pb="sm">
        Exercise Tolerance
      </Text>
      <Stack gap="md">
        <RadioGroup
          label="Can you walk up to two flights of stairs?"
          name="exerciseTolerance.flightStairs"
          options={radioOptions}
        />
        <CheckboxGroup
          name="exerciseTolerance.answered_question"
          inline={true}
          label="If you answered NO to the previous question, are you limited by the following?"
          options={checkboxes}
        />
        <RadioGroup
          label="Do you do any kind of physical activity or exercise?"
          name="exerciseTolerance.physicalActivity"
          options={radioOptions}
        />
        <Textarea
          label="What type, extrtion level and duration"
          placeholder="leave a comment here"
          name="exerciseTolerance.extrtionLevel"
        />
      </Stack>
    </Box>
  );
};

export default ExerciseTolerance;
