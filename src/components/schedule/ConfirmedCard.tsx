import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Text,
} from "@pansophictech/base";
import logo from "../../assets/img/logo.png";
import { RiDownloadLine, RiLock2Fill } from "@remixicon/react";
import { FC } from "react";
import { Checkbox, FormProvider, useForm } from "@pansophictech/hook-form";

const ConfirmedCard: FC<{
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
                Confirmed
              </Text>
              <Text py="md" size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
                Congratulations! 🎉 Your arrival is confirmed
              </Text>
              <Text size="sm" w="70%">
                We’re excited to confirm your upcoming arrival! To ensure a
                smooth and hassle-free check-in experience on the day of your
                arrival, please take a moment to share your arrival details and
                any relevant VISA documentation (if applicable).
              </Text>
              <Box>
                <Flex
                  align="flex-end"
                  c={"rgba(60, 60, 60, 1)"}
                  gap="100"
                  py="xl"
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
              </Box>
            </Box>
            <Box>
              <Flex gap="lg" align="center">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  radius={"xl"}
                  mr={10}
                >
                  Upload Flight Details
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  radius={"xl"}
                  mr={10}
                >
                  Upload VISA
                </Button>
                <ActionIcon c={"var(--mantine-color-theme-6)"}>
                  <RiDownloadLine size="15" />
                  <Text ml="xs">
                    Click here to download your VISA approval letter.
                  </Text>
                </ActionIcon>
              </Flex>
            </Box>
          </Flex>
        </form>
      </FormProvider>
    </>
  );
};

export default ConfirmedCard;
