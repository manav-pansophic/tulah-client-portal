import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Table,
  Text,
  Title,
} from "@pansophictech/base";
import classes from "./payment.module.css";
import { RiDeleteBin2Line, RiMentalHealthFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useGetPaymentHistoryQuery } from "../../services/payments/paymentServices";
import { convertUTCToDate } from "../../helper/functions";

const PaymentMainScreen = () => {
  const visitorId = "66d824947ce5e26ae9385d72";

  // Fetch Paymemt history
  const { data } = useGetPaymentHistoryQuery({ visitorId });
  console.log("Data fetched", data);

  const paymentHistory = data?.results;

  const basket = [
    {
      title: "GNOME Report",
      by: "Pedro Abott",
      price: "15000.00",
      icon: "",
    },
    {
      title: "MicroBIOME Report - Pedro",
      by: "Pedro Abott",
      price: "25000.00",
      icon: "",
    },
  ];

  const rows = (paymentHistory || []).map((payment) => (
    <Table.Tr key={payment.txn_id}>
      <Table.Td>{payment.txn_id}</Table.Td>
      <Table.Td>{convertUTCToDate(payment.paid_date)}</Table.Td>
      <Table.Td>
        {payment.payment_status == "Success" ? (
          <Badge c={"white"} bg={"green"} tt={"uppercase"} radius={"5px"}>
            Success
          </Badge>
        ) : payment.payment_status == "InProgress" ? (
          <Badge
            tt={"uppercase"}
            bg={"orange"}
            c={"white"}
            radius={"5px"}
            fw={600}
          >
            In Progress
          </Badge>
        ) : (
          <Badge
            tt={"uppercase"}
            bg={"red"}
            c={"white"}
            radius={"5px"}
            fw={600}
          >
            Failed
          </Badge>
        )}
      </Table.Td>
      <Table.Td>{payment.item_name}</Table.Td>
      <Table.Td>{payment.gateway}</Table.Td>
      <Table.Td>₹ {payment.amount}</Table.Td>
      <Table.Td>
        <Link data-test-id={`view-action-link-${payment.txn_id}`} to={"#"}>
          View Action
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  const isCartEmpty = false;

  return (
    <>
      {isCartEmpty ? (
        <>
          <Grid gutter={0}>
            <GridCol span={8}>
              <Box
                w={"calc(93vh* var(--mantine-scale))%"}
                ml={"10px"}
                bg={"transparent"}
                h={"calc(89vh* var(--mantine-scale))"}
                pb={"lg"}
                mr={"sm"}
              >
                <Box h={"7%"} className={classes.box} mb={"sm"} p={"lg"}>
                  <Flex justify={"space-between"} w={"100%"} h={"max-content"}>
                    <Title
                      fz={"h4"}
                      lts={"5px"}
                      tt={"uppercase"}
                      c={"var(--mantine-color-theme-6)"}
                    >
                      Your Basket
                    </Title>

                    <Title
                      fz={"h4"}
                      lts={"5px"}
                      tt={"uppercase"}
                      c={"var(--mantine-color-theme-10)"}
                    >
                      Total Items: 2 items
                    </Title>
                  </Flex>
                </Box>
                <Box h={"93%"} className={classes.box} p={"lg"}>
                  <Flex w={"100%"} h={"max-content"} direction={"column"}>
                    <Title
                      fz={"h4"}
                      lts={"5px"}
                      tt={"uppercase"}
                      c={"var(--mantine-color-theme-6)"}
                    >
                      Payment History
                    </Title>

                    <Table
                      mt={"lg"}
                      stripedColor="none"
                      className={classes.table}
                      highlightOnHover
                      withRowBorders
                      style={{ "--table-border-color": "none" }}
                    >
                      <Table.Thead bg={"white"}>
                        <Table.Tr>
                          <Table.Th>Txn ID</Table.Th>
                          <Table.Th>Txn Date</Table.Th>
                          <Table.Th>Status</Table.Th>
                          <Table.Th>Item Name</Table.Th>
                          <Table.Th>Gateway</Table.Th>
                          <Table.Th>Amount</Table.Th>
                          <Table.Th>Action</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                  </Flex>
                </Box>
              </Box>
            </GridCol>
            <GridCol span={4}>
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
            </GridCol>
          </Grid>
        </>
      ) : (
        <>
          <Grid gutter={0}>
            <GridCol span={8}>
              <Box
                w={"calc(93vh* var(--mantine-scale))%"}
                ml={"10px"}
                bg={"transparent"}
                h={"calc(89vh* var(--mantine-scale))"}
                pb={"lg"}
                mr={"sm"}
              >
                <Box h={"65%"} className={classes.box} mb={"sm"} p={"lg"}>
                  <Flex justify={"space-between"} w={"100%"} h={"max-content"}>
                    <Title
                      fz={"h4"}
                      lts={"5px"}
                      tt={"uppercase"}
                      c={"var(--mantine-color-theme-6)"}
                    >
                      Your Basket
                    </Title>

                    <Title
                      fz={"h4"}
                      lts={"5px"}
                      tt={"uppercase"}
                      c={"var(--mantine-color-theme-10)"}
                    >
                      Total Items: 2 items
                    </Title>
                  </Flex>

                  <Flex direction={"column"}>
                    <Card mt={"md"} className={classes.box}>
                      <Flex justify={"space-between"}>
                        <Flex align={"center"} gap="20">
                          <RiMentalHealthFill
                            size={50}
                            color="var(--mantine-color-theme-6)"
                          />
                          <Flex direction={"column"} gap={1}>
                            <Text>GNOME Report</Text>
                            <Text size="sm">Pedro Abott</Text>
                          </Flex>
                        </Flex>
                        <Flex direction="column" align="flex-end">
                          <Text lts={"1px"} fw={800}>
                            ₹15000.00
                          </Text>
                          <ActionIcon mt="xs">
                            <RiDeleteBin2Line />
                          </ActionIcon>
                        </Flex>
                      </Flex>
                    </Card>

                    <Card mt={"md"} className={classes.box}>
                      <Flex justify={"space-between"}>
                        <Flex align={"center"} gap="20">
                          <RiMentalHealthFill
                            size={50}
                            color="var(--mantine-color-theme-6)"
                          />
                          <Flex direction={"column"} gap={1}>
                            <Text>MicroBIOME Report - Pedro</Text>
                            <Text size="sm">Pedro Abott</Text>
                          </Flex>
                        </Flex>
                        <Flex direction="column" align="flex-end">
                          <Text lts={"1px"} fw={800}>
                            ₹25000.00
                          </Text>
                          <ActionIcon mt="xs">
                            <RiDeleteBin2Line />
                          </ActionIcon>
                        </Flex>
                      </Flex>
                    </Card>
                  </Flex>
                </Box>
                <Box h={"35%"} className={classes.box} p={"lg"}>
                  <Flex w={"100%"} h={"max-content"} direction={"column"}>
                    <Title
                      fz={"h4"}
                      lts={"5px"}
                      tt={"uppercase"}
                      c={"var(--mantine-color-theme-6)"}
                    >
                      payment history
                    </Title>

                    <Table
                      mt={"lg"}
                      stripedColor="none"
                      className={classes.table}
                      highlightOnHover
                      withRowBorders
                      style={{ "--table-border-color": "none" }}
                    >
                      <Table.Thead bg={"white"}>
                        <Table.Tr>
                          <Table.Th>Txn ID</Table.Th>
                          <Table.Th>Txn Date</Table.Th>
                          <Table.Th>Status</Table.Th>
                          <Table.Th>Item Name</Table.Th>
                          <Table.Th>Gateway</Table.Th>
                          <Table.Th>Amount</Table.Th>
                          <Table.Th>Action</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                  </Flex>
                </Box>
              </Box>
            </GridCol>
            <GridCol span={4}>
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
                    <Button
                      lts={"5px"}
                      tt={"uppercase"}
                      fz={"h5"}
                      radius={"35px"}
                    >
                      Proceed to payment
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </GridCol>
          </Grid>
        </>
      )}
    </>
  );
};

export default PaymentMainScreen;
