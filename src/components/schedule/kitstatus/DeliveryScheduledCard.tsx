import { Box, Button, Flex, Text } from "@pansophictech/base";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";

const DeliveryScheduledCard: FC<{
  isPicked: boolean;
  onScheduleClick: () => void;
}> = ({ isPicked, onScheduleClick }) => {
  return (
    <>
      <Flex direction="column" justify="space-between" gap="lg">
        <Box>
          <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
            Delivery Scheduled
          </Text>
          <Flex align="flex-end" gap="xs">
            <Text size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
              Your GNOME kit will be delivered within 48 hrs.
            </Text>
          </Flex>
          <Text size="sm" pt="lg">
            After your GNOME kit is delivered, revisit this section to mark ‘Kit
            Received’ and enable scheduling the smaple pickup.
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
            Kit Received
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default DeliveryScheduledCard;
