import { Box, Button, Flex, Group, Image, Text } from "@pansophictech/base";
import logo from "../../assets/img/logo.png";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";
import { Checkbox, FormProvider, useForm } from "@pansophictech/hook-form";

const ApprovedCard: FC<{
  statusType: string;
  //   onScheduleClick: () => void;
}> = ({ statusType }) => {
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });
  return (
    <>
      <FormProvider {...methods}>
        <form style={{ height: "100%" }}>
          <Flex direction="column" justify="space-between" h="100%" gap="lg">
            <Box>
              <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
                Approved
              </Text>
              <Text py="md" size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
                Awesome! Your preferred arrival has been approved.
              </Text>
              <Text size="sm">
                Please confirm your arrival by completing the payment now.
              </Text>
            </Box>
            <Box>
              <Flex
                align="flex-end"
                c={"rgba(60, 60, 60, 1)"}
                gap="100"
                pb="md"
              >
                <Box>
                  <Text fw={600} lts={5} tt="uppercase">
                    Check in
                  </Text>
                  <Text fz="h2" fw={600} pb="sm">
                    2nd Aug, 2024
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} lts={5} tt="uppercase">
                    Check Out
                  </Text>
                  <Text fz="h2" fw={600} pb="sm">
                    22nd Aug, 2024
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} lts={5} tt="uppercase">
                    Guest
                  </Text>
                  <Text fz="h2" fw={600} pb="sm">
                    2
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} lts={5} tt="uppercase">
                    Room(s)
                  </Text>
                  <Text fz="h2" fw={600} pb="sm">
                    1
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Button
                  //   onClick={onSubmitClick}
                  type="submit"
                  size="lg"
                  radius="xl"
                >
                  Proceed to Payment
                </Button>
              </Box>
            </Box>
          </Flex>
        </form>
      </FormProvider>
    </>
  );
};

export default ApprovedCard;
