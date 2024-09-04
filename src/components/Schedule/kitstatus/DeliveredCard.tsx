import { Box, Button, Flex, Text } from "@pansophictech/base";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";

const DeliveredCard: FC<{
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
            Delivered
          </Text>
          <Flex align="flex-end" gap="xs">
            <Text size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
              Kit received! Schedule the pickup after sampling.
            </Text>
          </Flex>
          <Text size="sm" pt="lg">
            Follow the kit instructions carefully, take your sample, and
            schedule pickup at your convenience.
          </Text>
        </Box>
        <Box>
          <Button
            variant="filled"
            radius="xl"
            size="lg"
            tt="uppercase"
            onClick={onScheduleClick}
          >
            Schedule Pickup
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default DeliveredCard;
