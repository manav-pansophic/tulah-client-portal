import { Box, Flex, Text, useMantineColorScheme } from "@pansophictech/base";
import { useColorScheme } from "@pansophictech/base";
import { Controller, useFormContext } from "@pansophictech/hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InputPhone = ({
  name,
  label,
  withAsterisk = false,
  disableDropdown = false,
  props,
}: any) => {
  const { control } = useFormContext();
  const { colorScheme } = useMantineColorScheme({ keepTransitions: true });
  const colorSchemeSystem = useColorScheme();

  const setConditionForColors =
    colorSchemeSystem === "dark" && colorScheme === "auto"
      ? "#2E2E2E"
      : colorSchemeSystem === "light" && colorScheme === "auto"
      ? "white"
      : colorScheme === "light"
      ? "white"
      : "#2E2E2E";

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <Flex direction="column">
            {label && (
              <Text
                component="div"
                fz={14}
                fw={500}
                mb={5}
                mt={2}
                pos="relative"
              >
                {label}
                {withAsterisk && (
                  <Box c="red.7" display="inline-block" ml={2}>
                    *
                  </Box>
                )}
              </Text>
            )}
            <PhoneInput
              dropdownStyle={{
                background: setConditionForColors,
                color: "text-white",
              }}
              inputStyle={{ width: "100%", height: "42px" }}
              searchStyle={{ paddingRight: "16px" }}
              // inputClass={`ui-design-tel-input ${!!error?.message && "has-error"}`}
              disableDropdown={disableDropdown}
              inputProps={{
                name: name,
                autoComplete: "off",
                useComputedColorScheme: true,
              }}
              countryCodeEditable={false}
              country={"in"}
              value={
                value !== "" && value !== undefined && value !== null
                  ? value
                  : "+91"
              }
              isValid={!error?.message}
              enableSearch={true}
              onBlur={onBlur}
              onChange={(newValue) => onChange(`+${newValue}`)}
              {...props}
            />
          </Flex>
        );
      }}
    />
  );
};

export default InputPhone;
