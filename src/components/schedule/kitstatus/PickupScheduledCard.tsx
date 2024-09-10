import { Box, Button, Flex, Text } from "@pansophictech/base";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";

const PickupScheduledCard: FC<{
  isPicked: boolean;
  onBack: () => void;
  scheduleDate:any
}> = ({ isPicked, onBack, scheduleDate}) => {
  return (
    <>
      <Flex direction="column" justify="space-between"  py="md" my="xl" p={"lg"} h={"90%"}> 
        <Box>
          <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
            Pickup Scheduled
          </Text>
          <Flex align="flex-end" gap="xs">
            <Text size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
              Pickup on {scheduleDate}, between 7 AM to 10 PM
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
            data-test-id="pickupscheduled-cancel-button"
            onClick={()=>alert("Pickup has been Cancelled")}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            radius="xl"
            size="lg"
            tt="uppercase"
            data-test-id="reschedule-button"
            onClick={onBack}
          >
            Reschedule
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default PickupScheduledCard;
