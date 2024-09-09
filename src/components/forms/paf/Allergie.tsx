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
      <Text data-test-id="allergies-title" c="theme" fw={600} pb="sm">
        Allergies
      </Text>
      <Stack gap="lg">
        <RadioGroup
          label="Do you have any known allergies or intolerances to any medication, anesthesia, food, or other substances? (e.g. dust, milk, gluten, latex, injections, perfume, room diffusers, contrast dye etc)."
          name="allergies.expSignificant"
          options={radio_options_allergies}
        />
        <Flex gap="md">
          <Box w="100%">
            <TextInput
              label="Name of medication / substance you are allergic /have an intolerance to"
              name="allergies.medication"
              props={{
                placeholder: "Value",
                labelProps: {
                  "data-test-id": "medication-label",
                },
              }}
            />
          </Box>
          <Box w="100%">
            <TextInput
              label="How do you react to this medication / substance (e.g. itchy, red, swelling)"
              name="allergies.reactmedication"
              props={{
                placeholder: "Value",
                labelProps: {
                  "data-test-id": "reactmedication-label",
                },
              }}
            />
          </Box>
        </Flex>
        <Box>
          <Button
            type="button"
            variant="transparent"
            size="compact-sm"
            p={0}
            styles={{ label: { padding: 0 } }}
            data-test-id="add-more-button"
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
