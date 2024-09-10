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
  index?: string;
}> = ({ testName, testStatus, testIcon, index }) => {
  return (
    <>
      <Box className="transparent" m="sm">
        <Flex align={"center"} gap="sm">
          <ActionIcon
            data-test-id={`gnomelist-icon-${index}`}
            variant="light"
            color="#3C3C3C"
            size="lg"
          >
            {testIcon}
          </ActionIcon>
          <Flex
            direction={"column"}
            align={"flex-start"}
            justify={"flex-start"}
          >
            <Text data-test-id={`gnomelist-name-${index}`}>{testName}</Text>
            <Badge color="#3C3C3C" size="xs" radius="sm" variant="light">
              <Text
                data-test-id={`gnomelist-status-${index}`}
                c="black"
                size={"10"}
              >
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
