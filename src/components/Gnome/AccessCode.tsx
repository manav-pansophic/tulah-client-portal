import {
  Box,
  CopyButton,
  Flex,
  PinInput,
  Text,
  Tooltip,
} from "@pansophictech/base";
import classes from "./pininput.module.css";
import { RiFileCopyLine } from "@remixicon/react";
import { useState } from "react";

const AccessCode = () => {
  const [data, setData] = useState("123456");
  return (
    <Flex justify={"center"} direction={"column"} gap="md" align={"center"}>
      <Text
        tt="uppercase"
        style={{ letterSpacing: "3px" }}
        c="theme"
        pt="sm"
        fw={600}
      >
        YOUr ACCESS CODE
      </Text>
      <PinInput
        size="sm"
        type="number"
        length={6}
        classNames={classes}
        value={data}
      />
      <Box pt="md">
        <CopyButton value={data} timeout={2000}>
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
                <Text onClick={copy} size="sm" c={"theme"}>
                  Click to Copy Code
                </Text>
              </Flex>
            </Tooltip>
          )}
        </CopyButton>
      </Box>
    </Flex>
  );
};

export default AccessCode;
