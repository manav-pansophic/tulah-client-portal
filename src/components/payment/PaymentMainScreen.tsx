import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Flex,
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
  const { data } = useGetPaymentHistoryQuery( {visitorId} );
  console.log('Data fetched',data);

  const paymentHistory = data?.results
  
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
    <Table.Tr
      key={payment.Txn_ID}
    >
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
        <Link to={"#"}>View Action</Link>
      </Table.Td>
    </Table.Tr>
  ));

  const isCartEmpty = false;

  return (
    <>
      {isCartEmpty ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default PaymentMainScreen;
