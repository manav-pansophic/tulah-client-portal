import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionGridPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";
import {
  ActionIcon,
  Box,
  Divider,
  Drawer,
  Flex,
  Grid,
  Input,
  Menu,
  Paper,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
} from "@pansophictech/base";
import { openModal } from "@pansophictech/modals";
import { RiAddLine, RiSearchLine } from "@remixicon/react";
import { getIconComponent } from "./components/GetIconComponent";
import AddCalendarInDrawer from "./forms/AddCalendarInDrawer";
import { CALENDARTABS } from "../../utils/constant";
import { Calendar } from "@pansophictech/dates";

export const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selectedDate.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelectedDate((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selectedDate.length < 3) {
      setSelectedDate((current) => [...current, date]);
    }
  };
  const calendarRef: React.LegacyRef<FullCalendar> = useRef(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState(null);
  const [openedMenu, { toggle }] = useDisclosure(false);
  const [filter, setFilter] = useState<string[]>([]);

  const eventType = [
    {
      name: "meeting",
      id: 12213,
    },
    {
      name: "Interview",
      id: 435435,
    },
    {
      name: "Event",
      id: 325364,
    },
  ];

  const handlePrevNextNavigation = (prevOrNextOrToday: any) => {
    const calendarApi = calendarRef.current.getApi();
    if (prevOrNextOrToday === "prev") {
      calendarApi.prev();
    } else if (prevOrNextOrToday === "next") {
      calendarApi.next();
    } else {
      calendarApi.today();
    }
    // if (
    //   calendarApi?.view?.currentStart?.getMonth() !==
    //   calendarApi?.view?.currentEnd?.getMonth()
    // ) {
    //   getCalendarEvent(getStartOrEndFromDate(calendarApi?.view?.currentStart));
    // }
  };

  const openDrawer = (type: any) => {
    setSelected(type);
    open();
  };

  const handleDateClicked = () => {
    openModal({
      centered: true,
      closeOnClickOutside: false,
      title: `View Your  Plan`,
      children: (
        <Box>dcx</Box>
        // <ViewCalendarEvent
        //   data={{
        //     eventId: eventId.toString(),
        //     eventTitle: eventTitle,
        //     selectedDate: selectedDate,
        //   }}
        // />
      ),
      size: "xl",
    });
  };
  return (
    <Box px={"md"}>
      <Paper radius={"md"} p={10} className="layout" mb={10}>
        <Flex justify={"space-between"}>
          <Tabs
            py={3}
            variant="pills"
            radius="xl"
            className="bgForms"
            // bg={"gray"}
            style={{
              borderRadius: "10px",
            }}
          >
            <Tabs.List grow>
              {CALENDARTABS.map((tab) => (
                <Tabs.Tab
                  data-test-id={`tab-${tab.value}`}
                  key={tab.value}
                  value={tab.value}
                >
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
          <Flex justify={"space-between"} gap={10} align={"center"}>
            <ActionIcon variant="outline" size={"md"} p={2}>
              <RiAddLine size={30} color="theme" />
            </ActionIcon>
            <Input
              className={"layout"}
              variant="unstyled"
              radius={"xl"}
              size="sm"
              style={{
                borderRadius: "10px",
                textAlign: "center",
                paddingLeft: "12px",
                "--input-placeholder-color": "black",
              }}
              placeholder="Search"
              rightSection={<RiSearchLine color="black" size={20} />}
            />
          </Flex>
        </Flex>
      </Paper>
      <Grid
        gutter={2}
        className="layout"
        style={{
          borderRadius: "10px",
        }}
      >
        <Grid.Col span={2}>
          <Paper bg={"transparent"} h="calc(100vh - 190px)" radius={"md"}>
            <Calendar
              size="md"
              getDayProps={(date) => ({
                selected: selectedDate.some((s) =>
                  dayjs(date).isSame(s, "date")
                ),
                onClick: () => handleSelect(date),
              })}
            />
            <Divider my={10} color="gray.4" mx={10} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={10}>
          <Box className="layout" p={14}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionGridPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              dayCellClassNames="calendarEvent-dayCell"
              weekends={true}
              fixedWeekCount={false}
              navLinks={false}
              dayMaxEvents={true}
              selectable={true}
              viewClassNames="Monthly"
              views={{
                timeGridWeek: {
                  dayHeaderFormat: { month: "short", day: "2-digit" },
                },
              }}
              dayHeaderFormat={{
                weekday: "short",
              }}
              // eventClick={handleEventClick}
              dateClick={handleDateClicked}
              customButtons={{
                prev: {
                  text: "Prev",
                  click: () => handlePrevNextNavigation("prev"),
                },
                next: {
                  text: "Next",
                  click: () => handlePrevNextNavigation("next"),
                },
                today: {
                  text: "Today",
                  click: () => handlePrevNextNavigation("today"),
                },
              }}
              eventTimeFormat={{
                hour: "numeric",
                minute: "2-digit",
                meridiem: "short",
              }}
              events={[]}
              firstDay={1}
              height="calc(100vh - 220px)"
            />
          </Box>
        </Grid.Col>
        <Box pos={"absolute"} bottom={50} right={50}>
          <Menu
            position="top"
            transitionProps={{ transition: "pop-bottom-right", duration: 300 }}
            zIndex={299}
            opened={openedMenu}
            onChange={toggle}
          >
            <Menu.Target>
              <ActionIcon
                variant="ai"
                bg={"theme"}
                size="xl"
                w={50}
                h={50}
                radius="xl"
              >
                <RiAddLine
                  size={30}
                  color="white"
                  style={{
                    transform: openedMenu ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown
              styles={{
                dropdown: {
                  background: "none",
                  border: "none",
                },
              }}
            >
              <Flex gap={10} direction="column">
                {eventType?.map((type: any) => (
                  <Tooltip
                    label={type.name}
                    position="left"
                    color={type?.color}
                    styles={{
                      tooltip: {
                        fontWeight: 700,
                      },
                    }}
                  >
                    <ActionIcon
                      variant="ai"
                      size="xl"
                      w={50}
                      h={50}
                      radius="xl"
                      style={{ backgroundColor: type?.color }}
                      onClick={() => openDrawer(type)}
                      c="white"
                    >
                      {getIconComponent(type?.name)}
                    </ActionIcon>
                  </Tooltip>
                ))}
              </Flex>
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Grid>
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Flex gap={10} justify="center" align="center">
            {getIconComponent(selected?.name ?? "")}{" "}
            <Text tt="capitalize"> {selected?.name} </Text>
          </Flex>
        }
        position="right"
        size="lg"
        zIndex="300"
        overlayProps={{ blur: 3 }}
        styles={{ body: { padding: 0 } }}
      >
        <AddCalendarInDrawer eventType={selected} close={close} />
      </Drawer>
    </Box>
  );
};
