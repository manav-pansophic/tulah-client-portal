import { Box, Stack, Text } from "@pansophictech/base";
import { CheckboxGroup } from "@pansophictech/hook-form";

const PillowPreference = () => {
  const checkboxesPillow = [
    { value: "contour", label: "Contour" },
    { value: "neckroll", label: "Neckroll" },
    { value: "boudoir", label: "Boudoir" },
    { value: "cushion", label: "Cushion" },
    { value: "feather", label: "Feather" },
    {
      value: "cottonSoft",
      label: "Cotton soft",
    },
    {
      value: "cottonMedium",
      label: "Cotton medium",
    },
    {
      value: "cottonFirm",
      label: "Cotton firm",
    },
  ];
  return (
    <Box>
      <Text c="theme" fw={600} pb="sm">
        Pillow Preference
      </Text>

      <Stack gap={15}>
        <CheckboxGroup
          name="pillowPreference.preference"
          inline={true}
          label="What type of pillow do you prefer?"
          options={checkboxesPillow}
        />
      </Stack>
    </Box>
  );
};

export default PillowPreference;
