import { Box, Button, Flex, Stack, Text } from "@pansophictech/base";
import { RadioGroup, TextInput } from "@pansophictech/hook-form";
import { RiAddLine } from "@remixicon/react";

const Allergie = () => {
  const radio_options_allergies = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];

  return (
    <Box>
      <Text c="theme" fw={600} pb="sm">
        Allergies
      </Text>
      <Stack gap="lg">
        <RadioGroup
          label="Do you have any known allergies or intolerances to any medication, anesthesia, food, or other substances? (e.g. dust, milk, gluten, latex, injections, perfume, room diffusers, contrast dye etc)."
          name="expSignificant"
          options={radio_options_allergies}
        />
        <Flex gap="md">
          <Box w="100%">
            <TextInput
              label="Name of medication / substance you are allergic /have an intolerance to"
              name="medication"
              props={{
                placeholder: "Value",
              }}
            />
          </Box>
          <Box w="100%">
            <TextInput
              label="How do you react to this medication / substance (e.g. itchy, red, swelling)"
              name="reactmedication"
              props={{
                placeholder: "Value",
              }}
            />
          </Box>
        </Flex>
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
      </Stack>
    </Box>
  );
};

export default Allergie;
