import { Box, Button, Divider, Flex, Text, Title } from "@pansophictech/base";
import classes from "./payment.module.css";
const PaymentSideBar = () => {
  const isCartEmpty = true;
  return (
    <>
      {isCartEmpty ? (
        <>
          <Box
            className={classes.box}
            p={"lg"}
            pos={"relative"}
            h={"calc(90vh - var(--app-shell-header-height) )"}
            bg={"transparent"}
            pb={"xs"}
            mr={"xs"}
          >
            <Flex w={"100%"} h={"max-content"} direction={"column"}>
              <Title
                fz={"h4"}
                lts={"5px"}
                tt={"uppercase"}
                c={"var(--mantine-color-theme-6)"}
              >
                checkout
              </Title>
            </Flex>
            <Flex h={"100%"} justify={"center"} align={"center"}>
              <Text c={"var(--mantine-color-theme-10)"}>
                Your basket is empty
              </Text>
            </Flex>
          </Box>
        </>
      ) : (
        <>
          <Box
            className={classes.box}
            p={"lg"}
            pos={"relative"}
            h={"calc(90vh - var(--app-shell-header-height) )"}
            bg={"transparent"}
            pb={"xs"}
            mr={"xs"}
          >
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
                  <Title fz={"h6"} lts={"2px"} tt={"uppercase"}>
                    GNOME Report
                  </Title>
                  <Text>Pedro Abott</Text>
                </Box>
                <Divider
                  color="var(--mantine-color-theme-10)"
                  w={"30%"}
                ></Divider>
                <Text>₹ 15000.00</Text>
              </Flex>

              <Flex justify={"space-between"} mt={"lg"} align={"center"}>
                <Box>
                  <Title fz={"h6"} lts={"2px"} tt={"uppercase"}>
                    GNOME Report
                  </Title>
                  <Text>Pedro Abott</Text>
                </Box>
                <Divider
                  color="var(--mantine-color-theme-10)"
                  w={"30%"}
                ></Divider>
                <Text>₹ 25000.00</Text>
              </Flex>
            </Flex>
            <Flex
              pos={"absolute"}
              bottom={0}
              direction={"column"}
              w={"-webkit-fill-available"}
              c={"#545454"}
              mr={"md"}
            >
              <Divider
                color="var(--mantine-color-theme-10)"
                w={"100%"}
              ></Divider>
              <Flex justify={"space-between"} mt={"md"} align={"center"}>
                <Title fz={"h5"}>Subtotal (2 items)</Title>
                <Divider
                  color="var(--mantine-color-theme-10)"
                  w={"35%"}
                ></Divider>
                <Text>₹ 35000.00</Text>
              </Flex>
              <Flex justify={"space-between"} mt={"md"} align={"center"}>
                <Title fz={"h5"}>Convenience Fee</Title>
                <Divider
                  color="var(--mantine-color-theme-10)"
                  w={"40%"}
                ></Divider>
                <Text>₹ 199.00</Text>
              </Flex>
              <Flex justify={"space-between"} my={"md"} align={"center"}>
                <Title fz={"h5"}>GST on Convenience Fee</Title>
                <Divider
                  color="var(--mantine-color-theme-10)"
                  w={"25%"}
                ></Divider>
                <Text>₹ 35.82</Text>
              </Flex>
              <Divider
                color="var(--mantine-color-theme-10)"
                w={"100%"}
              ></Divider>
              <Flex
                justify={"space-between"}
                my={"md"}
                align={"center"}
                p={"sm"}
              >
                <Title c={"var(--mantine-color-theme-6)"} fz={"h4"}>
                  Grand Total
                </Title>
                <Divider
                  color="var(--mantine-color-theme-10)"
                  w={"30%"}
                ></Divider>
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
      )}
    </>
  );
};

export default PaymentSideBar;
