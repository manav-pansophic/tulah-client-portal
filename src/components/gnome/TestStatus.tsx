import {
  ActionIcon,
  Badge,
  Box,
  Divider,
  Flex,
  Text,
} from "@pansophictech/base";
import { FC } from "react";

const TestStatus: FC<{
  testName?: string;
  testStatus?: string;
  testIcon?: any;
}> = ({ testName, testStatus, testIcon }) => {
  return (
    <>
      <Box className="transparent" m="sm">
        <Flex align={"center"} gap="sm">
          <ActionIcon variant="light" color="#3C3C3C" size="lg">
            {testIcon}
          </ActionIcon>
          <Flex
            direction={"column"}
            align={"flex-start"}
            justify={"flex-start"}
          >
            <Text>{testName}</Text>
            <Badge color="#3C3C3C" size="xs" radius="sm" variant="light">
              <Text c="black" size={"10"}>
                {testStatus}
              </Text>
            </Badge>
          </Flex>
        </Flex>
      </Box>
      <Divider color="gray" mx="sm" />
    </>
  );
};

export default TestStatus;
