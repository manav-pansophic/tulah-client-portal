import { Box, Center, Flex, Paper, Text } from "@pansophictech/base";
import { FC } from "react";

const ScheduleAssessmentHelp: FC<{
  icon?: any;
  title?: string;
  name?: string;
  description?: string;
}> = ({ title, icon, name, description }) => {
  return (
    <Paper className="layout">
      <Center>
        <Text
          tt="uppercase"
          fw={600}
          c="theme"
          style={{ letterSpacing: "3px" }}
          pt={3}
        >
          {title}
        </Text>
      </Center>
      <Paper className="layout" m={8} p={5}>
        <Flex align={"center"} gap="sm">
          <Box>{icon}</Box>
          <Flex direction={"column"}>
            <Text style={{ letterSpacing: "3px" }} fw={600}>
              {name}
            </Text>
            <Text size="13px" c={"theme"}>
              {description}
            </Text>
          </Flex>
        </Flex>
      </Paper>
    </Paper>
  );
};

export default ScheduleAssessmentHelp;
