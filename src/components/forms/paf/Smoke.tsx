import { Box, Text } from "@pansophictech/base";
import { RadioGroup, TextInput } from "@pansophictech/hook-form";

const Smoke = () => {
  const radioOptionsSmoke = [
    { value: "no", label: "No, never" },
    { value: "no-quit", label: "No, I've quit. Specify when you quit" },
    { value: "specifyWhat", label: "Yes, specify what and how many" },
  ];
  return (
    <Box>
      <Text c="theme" fw={600} pb="sm">
        Smoke
      </Text>
      <RadioGroup
        label="Do you smoke?"
        name="smoke.you_smoke"
        options={radioOptionsSmoke}
      />
      <Box pt="md">
        <TextInput
          name="smoke.leaveComment"
          props={{
            placeholder: "leave a comment",
          }}
        />
      </Box>
    </Box>
  );
};

export default Smoke;
