import { Box, Center, Flex, Paper, Text } from "@pansophictech/base";
import { FC } from "react";

const ScheduleAssessmentHelp: FC<{
  icon?: any;
  title?: string;
  name?: string;
  description?: string;
}> = ({ title, icon, name, description }) => {
  return (
    <Paper className="layout" py={22} radius={"md"}>
      <Center>
        <Text
          tt="uppercase"
          fw={600}
          c="theme"
          style={{ letterSpacing: "3px" }}
          pb={20}
        >
          {title}
        </Text>
      </Center>
      <Paper className="layout" mx={20} p={10}>
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
