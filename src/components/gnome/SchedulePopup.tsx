import { Button, Flex, Stack, Text } from "@pansophictech/base";

const SchedulePopup = () => {
  return (
    <Stack gap="sm">
      <Text size="xs" fw={500}>
        You are going to make changes to one report.
        <br />
        Would you like to apply the same changes to all 4 reports?
      </Text>

      <Flex gap="sm" mt="md">
        <Button size="sm" radius="xl" className="layout" c="black" fullWidth>
          <Text
            tt="uppercase"
            style={{ letterSpacing: "2px" }}
            size="xs"
            fw={600}
          >
            NO, JUST THIS ONE
          </Text>
        </Button>
        <Button size="sm" radius="xl" fullWidth>
          <Text
            tt="uppercase"
            style={{ letterSpacing: "2px" }}
            size="xs"
            fw={600}
          >
            Yes, Apply to all
          </Text>
        </Button>
      </Flex>
    </Stack>
  );
};

export default SchedulePopup;
