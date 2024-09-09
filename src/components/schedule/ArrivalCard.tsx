import { Box, Button, Flex, Group, Image, Text } from "@pansophictech/base";
import logo from "../../assets/img/logo.png";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";

const ArrivalCard: FC<{ isPicked: boolean; onScheduleClick: () => void }> = ({
  isPicked,
  onScheduleClick,
}) => {
  return (
    <>
      <Flex direction="column" justify="space-between" h="100%" gap="lg">
        <Box>
          <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
            Schedule
          </Text>
          <Flex align="flex-end" gap="xs">
            <Text size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
              Arrival at
            </Text>
            <Image src={logo} />
          </Flex>
          {isPicked && (
            <Text size="sm" pt="lg">
              Please select a date at least 15 days after sample pickup.
            </Text>
          )}
        </Box>
        <Box>
          {!isPicked ? (
            <>
              <RiLock2Fill color="var(--mantine-color-theme-0)" size={80} />
              <Text size="sm">
                You can schedule your arrival once your sample is picked.
              </Text>
            </>
          ) : (
            <>
              <Button
                variant="filled"
                radius="xl"
                size="lg"
                tt="uppercase"
                onClick={onScheduleClick}
                data-test-id="schedule-arrival-button"
              >
                Schedule Arrival
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ArrivalCard;
