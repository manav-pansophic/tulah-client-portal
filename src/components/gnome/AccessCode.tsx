import {
  Box,
  CopyButton,
  Divider,
  Flex,
  PinInput,
  Text,
  Tooltip,
} from "@pansophictech/base";
import classes from "./pininput.module.css";
import { RiFileCopyLine } from "@remixicon/react";
import { useGetAccessCodeQuery } from "../../services/schedule/scheduleServices";

const AccessCode = () => {
  const visitorId = "2";
  const { data } = useGetAccessCodeQuery({ visitorId });

  const accessCode = data?.results?.access_code.toString();

  return (
    <Flex justify={"center"} direction={"column"} gap="md" align={"center"}>
      <Text
        tt="uppercase"
        style={{ letterSpacing: "3px" }}
        c="theme"
        pt={20}
        fw={600}
        fs={"sm"}
      >
        Your Access Code
      </Text>
      <PinInput
        data-test-id="pininput"
        size="md"
        type="number"
        length={6}
        classNames={classes}
        value={accessCode}
      />
      <Box pt="md">
        <CopyButton
          data-test-id="click-copy-button"
          value={accessCode}
          timeout={2000}
        >
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Copied" : "Copy"}
              withArrow
              position="right"
            >
              <Flex align={"center"} gap={3}>
                <RiFileCopyLine
                  color="var(--mantine-color-theme-6)"
                  size="15px"
                />
                <Text
                  onClick={copy}
                  size="md"
                  c={"theme"}
                  style={{ cursor: "pointer" }}
                >
                  Click to Copy Code
                </Text>
              </Flex>
            </Tooltip>
          )}
        </CopyButton>
      </Box>
      <Divider my={20} color="gray.4" w={"90%"} />
    </Flex>
  );
};

export default AccessCode;
