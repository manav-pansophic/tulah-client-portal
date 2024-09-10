import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Paper,
  ScrollAreaAutosize,
  Stack,
  Text,
} from "@pansophictech/base";
import { InquiryButton } from "./InquiryButton";
import cardCss from "../../components/sidebar/sidebar.module.css";
import { RiCircleFill, RiPushpinLine, RiUserFill } from "@remixicon/react";

const InquiryList = [
  {
    name: "GENERAL",
  },
  {
    name: "Assessment",
  },
  {
    name: "GNOME",
  },
  {
    name: "Schedule",
  },
  {
    name: "Payments",
  },
];

const card = [
  {
    title: "Task Title",
    status: "Approved",
    showPushPin: false,
    id: 123,
    date: "Mar 21, 2024",
    time: "3:55 AM",
    userName: "Brian Coiller",
    text: "Lorem ipsum dolor sit amet consectetur. Integer eget morbiconsequat quis.",
  },
  {
    title: "Task Title",
    status: "Approved",
    showPushPin: false,
    date: "Mar 21, 2024",
    time: "3:55 AM",
    id: 123,
    userName: "Brian Coiller",
    text: "Lorem ipsum dolor sit amet consectetur. Integer eget morbiconsequat quis.",
    buttonText: "",
  },
  {
    title: "Task Title",
    status: "Approved",
    showPushPin: false,
    id: 123,
    date: "Mar 21, 2024",
    time: "3:55 AM",
    userName: "Brian Coiller",
    text: "Lorem ipsum dolor sit amet consectetur. Integer eget morbiconsequat quis.",
  },
];

export const Inquiry = () => {
  return (
    <Flex>
      <Box className="layout-bg-color navbar-layout" p={"sm"}>
        <InquiryButton />
        <Divider my={20} w={"100%"} color="gray" />
        {InquiryList.map((item, index) => {
          return (
            <Box px={25} py={15} mx={10} key={index} className={cardCss.card}>
              <Text fs={"16px"} lts={"0.2px"} tt={"uppercase"}>
                {item.name}
              </Text>
            </Box>
          );
        })}
      </Box>

      <Box
        className="layout-bg-color main-layout"
        h="calc(100vh - 110px)"
        w={"100%"}
      >
        <Box
          p={13}
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            borderBottom: "1px solid rgba(109, 109, 109, 0.2)",
          }}
        >
          <Text fw={600} tt={"uppercase"} lts={"2px"}>
            GENERAL inquiries
          </Text>
        </Box>
        <ScrollAreaAutosize h="calc(100vh - 255px)" p={"sm"}>
          {card.map((item, index) => {
            return (
              <Paper
                key={index}
                className={"layout"}
                radius={"md"}
                mt={20}
                p={"sm"}
                style={{
                  border: "1px solid #C8CAD3",
                  backgroundColor: "var(--mantine-color-theme-1)",
                }}
              >
                <Stack gap={7}>
                  <Flex justify={"space-between"}>
                    <Text size="md" fw={"bold"}>
                      {item.title}
                    </Text>
                    <Flex gap={10}>
                      <Badge radius="sm">{item.status}</Badge>
                      {item.showPushPin && <RiPushpinLine size={20} />}
                    </Flex>
                  </Flex>

                  <Flex justify={"space-between"}>
                    <Flex align="center" gap={4}>
                      <Text c={"gray.7"} size="13px">
                        {item.date}
                      </Text>
                      <RiCircleFill
                        size={10}
                        color="var(--mantine-color-theme-6)"
                      />
                      <Text c={"gray.7"} size="13px">
                        {item.time}
                      </Text>
                    </Flex>
                    <Text size="13px" c={"gray.7"}>
                      ID: {item.id}
                    </Text>
                  </Flex>

                  <Flex align="center" gap={4} pt={2}>
                    <RiUserFill
                      size={14}
                      color="var(--mantine-color-theme-6)"
                    />
                    <Text size="13px" c={"gray.7"}>
                      {item.userName}
                    </Text>
                  </Flex>
                  <Text size="sm" pt={3}>
                    {item.text}
                  </Text>
                  <Flex justify={"flex-end"} gap={10}>
                    <Button
                      size="xs"
                      radius={"xl"}
                      tt={"uppercase"}
                      lts={"2px"}
                    >
                      Mark Resolved
                    </Button>
                    <Button
                      variant="outline"
                      size="xs"
                      radius={"xl"}
                      tt={"uppercase"}
                      lts={"2px"}
                      className="layout"
                      c={"black"}
                    >
                      Respond
                    </Button>
                  </Flex>
                </Stack>
              </Paper>
            );
          })}
        </ScrollAreaAutosize>
        {/* <NoInquiryFound /> */}
      </Box>
    </Flex>
  );
};
