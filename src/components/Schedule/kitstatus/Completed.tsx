import { Box, Button, Flex, Text } from "@pansophictech/base";
import { RiLock2Fill } from "@remixicon/react";
import { FC } from "react";

const Completed: FC<{}> = () => {
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
            Completed
          </Text>
          <Flex align="flex-end" gap="xs">
            <Text size="24px " c={"rgba(60, 60, 60, 1)"} fw="bold">
              Your samples have been collected.
            </Text>
          </Flex>
        </Box>
        <Box>
          <Text size="sm">
            Your report will be ready within 15 days.
            <br /> In the meantime, you can schedule your arrival using the card
            below.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Completed;
