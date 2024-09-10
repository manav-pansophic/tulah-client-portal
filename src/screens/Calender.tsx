// import React, { useRef } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionGridPlugin from "@fullcalendar/interaction";
// import { Box, Grid } from "@pansophictech/base";
// import { openModal } from "@pansophictech/modals";

// export const Calendar = () => {
//   const calendarRef: React.LegacyRef<FullCalendar> = useRef(null);

//   const handlePrevNextNavigation = (prevOrNextOrToday) => {
//     const calendarApi = calendarRef.current.getApi();
//     if (prevOrNextOrToday === "prev") {
//       calendarApi.prev();
//     } else if (prevOrNextOrToday === "next") {
//       calendarApi.next();
//     } else {
//       calendarApi.today();
//     }
//     // if (
//     //   calendarApi?.view?.currentStart?.getMonth() !==
//     //   calendarApi?.view?.currentEnd?.getMonth()
//     // ) {
//     //   getCalendarEvent(getStartOrEndFromDate(calendarApi?.view?.currentStart));
//     // }
//   };

//   const handleDateClicked = () => {
//     openModal({
//       centered: true,
//       closeOnClickOutside: false,
//       title: `View Your  Plan`,
//       children: (
//         <Box>dcx</Box>
//         // <ViewCalendarEvent
//         //   data={{
//         //     eventId: eventId.toString(),
//         //     eventTitle: eventTitle,
//         //     selectedDate: selectedDate,
//         //   }}
//         // />
//       ),
//       size: "xl",
//     });
//   };
//   return (
//     <Box p={20}>
//       <Grid>
//         <Grid.Col span={2}>a</Grid.Col>
//         <Grid.Col span={10}>
//           <Box
//             className="layout-bg-color main-layout"
//             h="calc(100vh - 140px)"
//             p={10}
//           >
//             <FullCalendar
//               ref={calendarRef}
//               plugins={[dayGridPlugin, timeGridPlugin, interactionGridPlugin]}
//               initialView="dayGridMonth"
//               headerToolbar={{
//                 left: "prev,next today",
//                 center: "title",
//                 right: "dayGridMonth,timeGridWeek,timeGridDay",
//               }}
//               dayCellClassNames="calendarEvent-dayCell"
//               weekends={true}
//               fixedWeekCount={false}
//               navLinks={false}
//               dayMaxEvents={true}
//               selectable={true}
//               viewClassNames="Monthly"
//               views={{
//                 timeGridWeek: {
//                   dayHeaderFormat: { month: "short", day: "2-digit" },
//                 },
//               }}
//               dayHeaderFormat={{
//                 weekday: "short",
//               }}
//               // eventClick={handleEventClick}
//               dateClick={handleDateClicked}
//               customButtons={{
//                 prev: {
//                   text: "Prev",
//                   click: () => handlePrevNextNavigation("prev"),
//                 },
//                 next: {
//                   text: "Next",
//                   click: () => handlePrevNextNavigation("next"),
//                 },
//                 today: {
//                   text: "Today",
//                   click: () => handlePrevNextNavigation("today"),
//                 },
//               }}
//               eventTimeFormat={{
//                 hour: "numeric",
//                 minute: "2-digit",
//                 meridiem: "short",
//               }}
//               events={[]}
//               firstDay={1}
//               height="calc(100vh - 165px)"
//             />
//           </Box>
//         </Grid.Col>
//       </Grid>
//     </Box>
//   );
// };

import {
  checkMenuPermission,
  getStartOrEndFromDate,
} from "@/utility/new/function";
// import EventCalendar from "@/forms/entities/calendar/components/EventCalendar";
import AddCalendarInDrawer from "@/forms/entities/calendar/forms/AddCalendarInDrawer";
// import ViewCalendarEvent from "@/forms/entities/calendar/components/ViewCalendarEvent";
import CalendarPageSkeleton from "@/forms/entities/calendar/skeleton/CalendarPageSkeleton";
// import { getIconComponent } from "@/forms/entities/calendar/components/GetIconComponent";

import dayjs from "dayjs";
import { openModal } from "@mantine/modals";
import { IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { FC, Suspense, lazy, useEffect, useState } from "react";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
// import { appIcon } from "@/components/common/icons/icons";
import { EventClickArg } from "@fullcalendar/core/index.js";
import { DateClickArg } from "@fullcalendar/interaction/index.js";
import {
  ActionIcon,
  Box,
  Checkbox,
  ColorSwatch,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  List,
  Menu,
  Paper,
  ScrollArea,
  Text,
  Tooltip,
} from "@mantine/core";
// import { per } from "@/permission/permission";
// import Permission from "@/components/permission/Permission";
// import { AUTH_TOKEN } from "@/redux/reducers/auth/auth.slice";
import moment from "moment";
import { getIconComponent } from "./calendar/components/GetIconComponent";
import EventCalendar from "./calendar/components/EventCalendar";
import ViewCalendarEvent from "./calendar/components/ViewCalendarEvent";

// const ContentLayout = lazy(() => import("@/layouts/new/ContentLayout.tsx"));

dayjs.extend(isSameOrAfter);

const CalendarPage: FC = () => {
  // const permission = useAppSelector(AUTH_TOKEN);
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState(null);
  const [openedMenu, { toggle }] = useDisclosure(false);
  const [filter, setFilter] = useState<string[]>([]);

  let eventData;
  let eventType: any = [];

  // const [getCalendarEvent, { data: eventData, isLoading, isFetching }] =
  //   useLazyGetCalendarEventQuery();

  // const { data: eventType } = useGetCalendarEventTypeQuery("", {
  //   refetchOnMountOrArgChange: false,
  // });

  // useEffect(() => {
  //   getCalendarEvent(getStartOrEndFromDate(new Date()));
  // }, []);

  const filterData = (data: any, filters: string[]) => {
    if (!filters || filters.length === 0) {
      return [];
    }
    return data?.filter((item: any) => filters.includes(item.task_name));
  };
  const eventUpdated = filterData(eventData || [], filter) ?? [];

  useEffect(() => {
    const updated: string[] | undefined = eventType?.map(
      (type: any) => type.name
    );
    setFilter(updated || []);
  }, [eventType]);

  const constOpenEventModal = (
    eventId: number,
    selectedDate?: Date,
    eventTitle?: string
  ): void => {
    openModal({
      centered: true,
      closeOnClickOutside: false,
      title: `View Your ${eventTitle} Plan`,
      children: (
        <ViewCalendarEvent
          data={{
            eventId: eventId.toString(),
            eventTitle: eventTitle,
            selectedDate: selectedDate,
          }}
        />
      ),
      size: "xl",
    });
  };

  const handleEventClick = (info: EventClickArg): void => {
    constOpenEventModal(
      Number(info?.event?.extendedProps?.calendar_id),
      info?.event?.extendedProps?.task_date,
      info?.event?.extendedProps?.task_name
    );
  };
  const eventClick = (event: any): void => {
    constOpenEventModal(
      Number(event?.calendar_id),
      event?.task_date,
      event?.task_name
    );
  };

  const handleDateClicked = (dateObject: DateClickArg): void => {
    const { date } = dateObject || {};
    if (date && dayjs(date).isSameOrAfter(dayjs().startOf("day"))) {
      constOpenEventModal(0, date);
    }
  };

  const openDrawer = (type: any) => {
    setSelected(type);
    open();
  };

  return (
    <>
      <Suspense fallback="Please Wait...">
        <Box pos="relative" w="100%" h="100%">
          {/* {(isLoading || isFetching) && (
            <Flex
              pos="absolute"
              style={{ zIndex: 305 }}
              w="100%"
              h="100%"
              justify="center"
              align="center"
            >
              <CalendarPageSkeleton />
            </Flex>
          )} */}
          <Box pos="relative" w="100%">
            <Grid gutter={20}>
              <Grid.Col span={{ base: 12, lg: 2, md: 3 }}>
                <Paper withBorder radius="sm" p={20}>
                  <Grid>
                    <Grid.Col span={12}>
                      {" "}
                      <Text fw={600} mb={15}>
                        My Calendar
                      </Text>
                      <Checkbox.Group value={filter} onChange={setFilter}>
                        <Group
                          mt="xs"
                          styles={{
                            root: {
                              flexDirection: "column",
                              alignItems: "flex-start",
                            },
                          }}
                        >
                          {eventType?.map((type: any) => (
                            <Flex
                              key={type.name}
                              gap="lg"
                              align="center"
                              justify="space-between"
                              w="100%"
                            >
                              <Checkbox
                                value={type.name}
                                label={type.name}
                                right={type.color}
                                fw={500}
                              />
                              <ColorSwatch color={type.color} size={18} />
                            </Flex>
                          ))}
                        </Group>
                      </Checkbox.Group>
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <Divider my="sm" />{" "}
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <Text fw={600} mb={15}>
                        Upcoming Events
                      </Text>
                      <ScrollArea h="calc(100vh - 538px)">
                        <List
                          spacing="xs"
                          size="sm"
                          styles={{
                            root: {
                              paddingLeft: 0,
                            },
                            itemWrapper: {
                              alignItems: "normal",
                            },
                          }}
                        >
                          {eventUpdated
                            ?.filter((event: any) =>
                              dayjs(event.task_date).isSameOrAfter(
                                dayjs().startOf("day")
                              )
                            )
                            ?.map((event: any, key: number) => (
                              <Box key={key}>
                                <List.Item
                                  icon={
                                    <ColorSwatch
                                      color={event?.color}
                                      size={18}
                                    />
                                  }
                                  onClick={() => {
                                    eventClick(event);
                                  }}
                                  className="cursor-pointer"
                                >
                                  <Text tt="capitalize" fw={500} lineClamp={1}>
                                    {" "}
                                    {event?.title}
                                  </Text>
                                  <Text size="sm">
                                    {moment(
                                      event?.task_date,
                                      "YYYY-MM-DD"
                                    ).format("dddd, MMMM Do")}
                                    -
                                    {moment(
                                      event?.start_time,
                                      "HH:mm:ss"
                                    ).format("hh:mm a")}
                                  </Text>
                                </List.Item>
                                <Divider my="sm" variant="dashed" />{" "}
                              </Box>
                            ))}
                        </List>
                      </ScrollArea>
                    </Grid.Col>
                  </Grid>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 10, md: 9 }}>
                <Paper withBorder radius="sm" p={20}>
                  <EventCalendar
                    eventData={eventUpdated}
                    handleEventClick={handleEventClick}
                    handleDateClicked={handleDateClicked}
                    // getCalendarEvent={getCalendarEvent}
                  />
                </Paper>
              </Grid.Col>

              <Box className="absolute right-10 bottom-10 z-10">
                <Menu
                  position="top"
                  transitionProps={{
                    transition: "pop-bottom-right",
                    duration: 300,
                  }}
                  zIndex={299}
                  opened={openedMenu}
                  onChange={toggle}
                >
                  <Menu.Target>
                    <ActionIcon
                      variant="ai"
                      size="xl"
                      w={50}
                      h={50}
                      radius="xl"
                      className="bg-theme"
                    >
                      <IconPlus
                        size={30}
                        stroke={2}
                        color="white"
                        style={{
                          transform: openedMenu
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
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
          </Box>
        </Box>
      </Suspense>
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
        {/* <AddCalendarInDrawer eventType={selected} close={close} /> */}
      </Drawer>
    </>
  );
};

export default CalendarPage;
