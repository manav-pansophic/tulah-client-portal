import { useGetEventByIdQuery } from "@/services/new/calendar/calendar.service";
// import { ViewCalendarEventT } from "@/forms/entities/calendar/schema/addEdit.schema";
// import DeleteCalendarEvent from "@/forms/entities/calendar/components/DeleteCalendarEvent";
import ViewCalendarEventSkeleton from "@/forms/entities/calendar/components/ViewCalendarEventSkeleton";

import { FC } from "react";
import moment from "moment";
import {
  IconCalendarEvent,
  IconEdit,
  IconList,
  IconTimelineEventText,
  IconTrashX,
  IconTrashXFilled,
  IconUsers,
  IconBellRinging,
  IconCalendarRepeat,
} from "@tabler/icons-react";
import { openModal } from "@mantine/modals";
import {
  ActionIcon,
  Box,
  Drawer,
  Flex,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import UpdateCalendarDrawer from "../forms/UpdateCalendarDrawer";
import DeleteCalendarEvent from "./DeleteCalendarEvent";

const ViewCalendarEvent: FC<any> = ({ data }) => {
  // const { data: instanceData, isFetching } = useGetEventByIdQuery(
  //   { id: data?.eventId },
  //   { skip: !data.eventId, refetchOnMountOrArgChange: true }
  // );

  let instanceData: any;

  const editorDeleteEvent = (isDeleteAll = false) => {
    openModal({
      centered: true,
      closeOnClickOutside: false,
      title: `Delete your ${data?.eventTitle}`,
      children: (
        <Box>xcsdc</Box>
        // <DeleteCalendarEvent
        //   data={{
        //     deleteObj: {
        //       delete_date: data?.selectedDate,
        //       delete_time: instanceData?.start_time,
        //       specific_delete: !isDeleteAll,
        //       eventId: data.eventId,
        //     },
        //     title: isDeleteAll
        //       ? `All ${data?.eventTitle}s of ${instanceData?.title}`
        //       : `${data?.eventTitle} - ${instanceData?.title}`,
        //   }}
        // />
      ),
      className: "inx-modal",
      size: "md",
    });
  };
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Paper p={5}>
      {/* {isFetching ? (
        <ViewCalendarEventSkeleton />
      ) : ( */}
      <Box className="grid grid-cols-1 gap-3">
        <Flex align="center" gap="md">
          <Text>
            <IconTimelineEventText stroke={1.7} />
          </Text>
          <Flex align="center" justify="space-between" className="w-full">
            <Text size="lg" tt="capitalize">
              {instanceData?.title}
            </Text>
            <Flex align="center" gap={20}>
              {/* <Permission access={{ check: [per.CALENDER.EDIT, per.CALENDER.ALL] }}> */}
              <Tooltip label="Update Event" position="bottom" color="theme">
                <ActionIcon variant="ai" size="xl" radius="xl" onClick={open}>
                  <IconEdit stroke={1.7} />
                </ActionIcon>
              </Tooltip>
              {/* </Permission> */}
              {/* <Permission access={{ check: [per.CALENDER.DELETE, per.CALENDER.ALL] }}> */}
              <Tooltip
                label="Delete today event"
                position="bottom"
                color="theme"
              >
                <ActionIcon
                  variant="ai"
                  size="xl"
                  radius="xl"
                  onClick={() => editorDeleteEvent(false)}
                >
                  <IconTrashX stroke={1.7} />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Delete all event" position="bottom" color="theme">
                <ActionIcon
                  variant="ai"
                  size="xl"
                  radius="xl"
                  onClick={() => editorDeleteEvent(true)}
                >
                  <IconTrashXFilled stroke={1.7} />
                </ActionIcon>
              </Tooltip>
              {/* </Permission> */}
            </Flex>
          </Flex>
        </Flex>
        <Flex align="center" gap="md">
          <Text>
            <IconList stroke={1.7} />
          </Text>
          <Text>{instanceData?.description}</Text>
        </Flex>
        <Flex align="center" gap="md">
          <Text>
            <IconCalendarEvent stroke={1.7} />
          </Text>
          <Box>
            <Text>
              {moment(data?.selectedDate, "YYYY-MM-DD").format("dddd, MMMM Do")}
            </Text>
            <Box>
              {instanceData?.["all_day"] ? (
                <Text>All day event'</Text>
              ) : (
                <Text>
                  {moment(instanceData?.start_time, "HH:mm:ss").format(
                    "hh:mm a"
                  )}{" "}
                  -{moment(instanceData?.end_time, "HH:mm:ss").format("h:mm a")}
                </Text>
              )}
            </Box>
          </Box>
        </Flex>
        {instanceData?.is_repeat && (
          <Flex align="center" gap="md">
            <Text>
              <IconCalendarRepeat stroke={1.7} />
            </Text>
            <Text>
              {instanceData?.is_repeat && "Repeat ("}{" "}
              {moment(instanceData?.start).format("dddd, MMMM Do")}
              {instanceData?.is_repeat && (
                <span>
                  {" "}
                  - {moment(instanceData?.end).format("dddd, MMMM Do")} )
                </span>
              )}
            </Text>
          </Flex>
        )}

        <Flex align="center" gap="md">
          <Text>
            <IconUsers stroke={1.7} />
          </Text>
          <Text>
            {instanceData?.is_all_team
              ? "All Team"
              : instanceData?.team?.length
              ? instanceData?.team_name?.join(", ")
              : instanceData?.members?.length
              ? instanceData?.members_name?.join(", ")
              : "No members added !"}
          </Text>
        </Flex>
        <Flex align="center" gap="md">
          <Text>
            <IconBellRinging stroke={1.7} />
          </Text>
          <Text>
            <div>
              {instanceData?.is_notify
                ? `${instanceData?.notification_time} mins`
                : "Off !"}
            </div>
          </Text>
        </Flex>
        {/* <Drawer
          opened={opened}
          onClose={close}
          title={`View Your ${instanceData?.title} Plan`}
          position="right"
          size="lg"
          zIndex="300"
          overlayProps={{ blur: 3 }}
          styles={{ body: { padding: 0 } }}
        >
          <UpdateCalendarDrawer
            instance={instanceData}
            typeInfo={data}
            close={close}
          />
        </Drawer> */}
      </Box>
      {/* )} */}
    </Paper>
  );
};

export default ViewCalendarEvent;
