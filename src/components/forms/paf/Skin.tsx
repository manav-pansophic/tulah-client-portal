import { Box, Stack, Text } from "@pansophictech/base";
import { CheckboxGroup, RadioGroup } from "@pansophictech/hook-form";

const Skin = () => {
  const checkboxes = [
    { value: "psoriasis", label: "Psoriasis" },
    { value: "rosacea", label: "Rosacea" },
    { value: "itching", label: "Itching" },
    { value: "eczema", label: "Eczema" },
    { value: "acne", label: "Acne" },
    {
      value: "rash",
      label: "Rash",
    },
    {
      value: "skin_issue",
      label: "No, I don't have any skin issue",
    },
  ];
  const radioBruisesEasily = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  return (
    <Box w="100%">
      <Text c="theme" fw={600} pb="sm">
        Skin
      </Text>
      <Stack gap="lg">
        <CheckboxGroup
          name="skin.skin_issue"
          inline={true}
          label="Do you have any skin issues?"
          options={checkboxes}
        />
        <RadioGroup
          label="Do you get bruises easily?"
          name="skin.bruises_easily"
          options={radioBruisesEasily}
        />
      </Stack>
    </Box>
  );
};

export default Skin;
