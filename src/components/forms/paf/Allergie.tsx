import { Box, Button, Flex, Stack, Text } from "@pansophictech/base";
import { RadioGroup, TextInput } from "@pansophictech/hook-form";
import { useFieldArray, useFormContext } from "@pansophictech/hook-form";
import { RiAddLine } from "@remixicon/react";
import { initialPafSchema } from "./paf.schema";

const Allergie = () => {
  const { control } = useFormContext();

  // Access allergies field array
  const { fields, append } = useFieldArray({
    control,
    name: "allergies",
  });

  console.log(fields);

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

        {fields.map((item, index) => (
          <Flex key={item.id} gap="md">
            <Box w="100%">
              <TextInput
                label="Name of medication / substance you are allergic / have an intolerance to"
                name={`allergies.${index}.medication`}
                props={{
                  placeholder: "Medication",
                }}
              />
            </Box>
            <Box w="100%">
              <TextInput
                label="Reaction to the medication / substance"
                name={`allergies.${index}.reactmedication`}
                props={{
                  placeholder: "Reaction",
                }}
              />
            </Box>
          </Flex>
        ))}

        <Box>
          <Button
            type="button"
            variant="transparent"
            size="compact-sm"
            p={0}
            onClick={() => append(initialPafSchema.allergiesForm.allergies[0])}
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
