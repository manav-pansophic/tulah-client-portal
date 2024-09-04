import { Box, Button, Divider, Flex, Text, Title } from "@pansophictech/base";
import React from "react";
import classes from "./payment.module.css";
const PaymentSideBar = () => {
  return (
    <>
      <Box className={classes.box} p={"lg"} pos={"relative"}>
        <Flex w={"100%"} h={"max-content"} direction={"column"}>
          <Title
            fz={"h4"}
            lts={"5px"}
            tt={"uppercase"}
            c={"var(--mantine-color-theme-6)"}
          >
            checkout
          </Title>

          <Flex justify={"space-between"} mt={"lg"} align={"center"}>
            <Box>
              <Title fz={"h6"} lts={"2px"} tt={"uppercase"} >
                GNOME Report
              </Title>
              <Text>Pedro Abott</Text>
            </Box>
            <Divider color="darkgray" w={"30%"}></Divider>
            <Text>₹ 15000.00</Text>
          </Flex>

          <Flex justify={"space-between"} mt={"lg"} align={"center"}>
            <Box>
              <Title fz={"h6"} lts={"2px"} tt={"uppercase"}>
                GNOME Report
              </Title>
              <Text>Pedro Abott</Text>
            </Box>
            <Divider color="darkgray" w={"30%"}></Divider>
            <Text>₹ 25000.00</Text>
          </Flex>
        </Flex>
        <Flex
          pos={"absolute"}
          bottom={0}
          direction={"column"}
          w={"-webkit-fill-available"}
          c={"#545454"}
        >
          <Divider color="darkgray" w={"95%"}></Divider>
          <Flex justify={"space-between"} mt={"lg"} align={"center"} mr={"md"}>
            <Title fz={"h4"}>Subtotal (2 items)</Title>
            <Divider color="darkgray" w={"35%"}></Divider>
            <Text>₹ 35000.00</Text>
          </Flex>
          <Flex justify={"space-between"} mt={"lg"} align={"center"} mr={"md"}>
            <Title fz={"h4"}>Convenience Fee</Title>
            <Divider color="darkgray" w={"35%"}></Divider>
            <Text>₹ 199.00</Text>
          </Flex>
          <Flex justify={"space-between"} my={"lg"} align={"center"} mr={"md"}>
            <Title fz={"h4"}>GST on Convenience Fee</Title>
            <Divider color="darkgray" w={"20%"}></Divider>
            <Text>₹ 35.82</Text>
          </Flex>
          <Divider color="darkgray" w={"95%"}></Divider>
          <Flex
            justify={"space-between"}
            my={"lg"}
            align={"center"}
            mr={"md"}
            p={"sm"}
          >
            <Title c={"var(--mantine-color-theme-6)"} fz={"h3"}>
              Grand Total
            </Title>
            <Divider color="darkgray" w={"20%"}></Divider>
            <Title c={"var(--mantine-color-theme-6)"} fz={"h3"}>
              ₹ 35,234.82
            </Title>
          </Flex>

          <Flex mb={"lg"} justify={"center"}>
            <Button lts={"5px"} tt={"uppercase"} fz={"h5"} radius={"35px"}>
              Proceed to payment
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default PaymentSideBar;
