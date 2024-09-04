import { Box, Button, Flex, Text } from "@pansophictech/base";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";

const PickupScheduledCard: FC<{
  isPicked: boolean;
  onScheduleClick: () => void;
}> = ({ isPicked, onScheduleClick }) => {
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        gap="lg"
        h="100%"
        py="xl"
      >
        <Box>
          <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
            Pickup Scheduled
          </Text>
          <Flex align="flex-end" gap="xs">
            <Text size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
              Pickup on 26th Aug, between 7 AM to 10 PM
            </Text>
          </Flex>
          <Text size="sm" pt="lg">
            Follow the kit instructions carefully, take your sample, and
            schedule pickup at your convenience.
          </Text>
        </Box>
        <Box>
          <Button
            type="button"
            size="lg"
            variant="outline"
            radius={"xl"}
            mr={10}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            radius="xl"
            size="lg"
            tt="uppercase"
            onClick={onScheduleClick}
          >
            Reschedule
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default PickupScheduledCard;
