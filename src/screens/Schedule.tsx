import {
  Box,
  Divider,
  Flex,
  Paper,
  ScrollArea,
  Select,
  Stack,
  Text,
} from "@pansophictech/base";
import "../components/layout/layout.css";
import AccessCode from "../components/gnome/AccessCode";
import ScheduleAssessmentHelp from "../components/gnome/ScheduleAssessmentHelp";
import {
  RiCheckboxCircleFill,
  RiDragMove2Line,
  RiPhoneFill,
} from "@remixicon/react";
import { useState } from "react";
import ScheduleStatusCard from "../components/schedule/ScheduleStatusCard";
import ArrivalCard from "../components/schedule/ArrivalCard";
import ScheduleArricalCard from "../components/schedule/ScheduleArricalCard";
import TestStatus from "../components/gnome/TestStatus";
import Completed from "../components/schedule/kitstatus/Completed";
import { createGuestSelectOptions } from "../helper/functions";
import { useGetAllGuestListQuery } from "../services/guests/guestServices";
import SchedulePickup from "../components/schedule/kitstatus/SchedulePickup";
import { useGetAllReportsQuery } from "../services/gnome-biome/gnomeBiomeServices";
import UserCard from "../components/sidebar/UserCard";

export const Schedule = () => {
  const [scheduling, setScheduling] = useState(false);
  const [isscheduled, setIsScheduled] = useState(false);
  const [statusType, setStatusType] = useState("INPROGRESS");
  const [isPicked, setIsPicked] = useState(true);

  const { data } = useGetAllGuestListQuery();
  const guestList = data?.results;
  const guestListOption = guestList?.length
    ? createGuestSelectOptions(guestList)
    : [];

  const { currentData } = useGetAllReportsQuery();
  const reportsList = currentData?.results;

  const handleReportClick = (reportName) => {
    console.log("Report Name", reportName);
  };

  return (
    <>
      <Flex gap={"sm"} p={"sm"} w={"100%"}>
        <Flex direction={"column"} gap="sm" w="75%">
          <Paper className="layout" h="calc(100vh - 561px)">
            <Flex h="100%">
              <Flex direction={"column"} p={"lg"}>
                <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
                  Report Status
                </Text>
                <Select
                  defaultValue={"user"}
                  data={guestListOption || []}
                  w={"100%"}
                  pb={13}
                  placeholder="Select Guest"
                  data-test-id="user-list-select"
                />
                <Stack w="300px">
                  <ScrollArea>
                    {reportsList?.map((report, index) => (
                      <UserCard
                        key={index}
                        name={report.name.toUpperCase()}
                        avatar={report.image}
                        badgeName={report.status}
                        onClick={() => handleReportClick(report.name)}
                      />
                    ))}
                  </ScrollArea>
                </Stack>
              </Flex>
              <Divider orientation="vertical" color="gray" />
              <Box w={"100%"}>
                {/* <DeliveredCard
                  isPicked={isPicked}
                  onScheduleClick={() => setScheduling(true)}
                /> */}
                <SchedulePickup
                  isPicked={isPicked}
                  onSubmitClick={() => setScheduling(true)}
                  onBack={() => setScheduling(false)}
                />
                {/* <PickupScheduledCard
                  isPicked={isPicked}
                  onScheduleClick={() => setScheduling(true)}
                  // onSubmitClick={() => setScheduling(true)}
                  // onBack={() => setScheduling(false)}
                /> */}
                {/* <Completed /> */}
              </Box>
            </Flex>
          </Paper>
          {isscheduled ? (
            <Paper className="layout" h="calc(100vh - 555px)" p="lg">
              <ScheduleStatusCard statusType={statusType} />
            </Paper>
          ) : !scheduling ? (
            <Paper className="layout" h="calc(100vh - 555px)" p="lg">
              <ArrivalCard
                isPicked={isPicked}
                onScheduleClick={() => setScheduling(true)}
              />
            </Paper>
          ) : (
            <Paper
              bg="var(--mantine-color-theme-0)"
              h="calc(100vh - 555px)"
              p="lg"
            >
              <ScheduleArricalCard
                isPicked={isPicked}
                onSubmitClick={() => setIsScheduled(true)}
                // onSubmitClick={() => setIsScheduled("INPROGRESS")}
                onBack={() => setScheduling(false)}
              />
            </Paper>
          )}
          {/* <Paper className="layout" h="calc(100vh - 555px)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quod, quasi iure impedit vel error nobis praesentium officiis unde
            est.
          </Paper> */}
        </Flex>
        <Flex direction={"column"} gap="sm" w={"25%"}>
          <Paper className="layout" h="calc(100vh - 470px)">
            <AccessCode />
          </Paper>
          <Box className="transparent" h="calc(100vh - 820px)">
            <ScheduleAssessmentHelp
              icon={
                <RiCheckboxCircleFill
                  color="var(--mantine-color-theme-6)"
                  size={40}
                />
              }
              title={"Assessment"}
              name="Assessment Approved"
              description="Click to View Assessment"
            />
          </Box>
          <Box className="transparent" h="calc(100vh - 820px)">
            <ScheduleAssessmentHelp
              icon={
                <RiPhoneFill color="var(--mantine-color-theme-6)" size={40} />
              }
              title={"Help & Support"}
              name="+91-9876543210"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
