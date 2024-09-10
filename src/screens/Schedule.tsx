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
import DeliveryScheduledCard from "../components/schedule/kitstatus/DeliveryScheduledCard";
import DeliveredCard from "../components/schedule/kitstatus/DeliveredCard";
import PickupScheduledCard from "../components/schedule/kitstatus/PickupScheduledCard";

export const Schedule = () => {
  const [scheduling, setScheduling] = useState(false);
  const [isscheduled, setIsScheduled] = useState(false);
  const [statusType, setStatusType] = useState("INPROGRESS");
  const [isPicked, setIsPicked] = useState(false);

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

  const [scheduleStage, setScheduleStage] = useState(0);
  const [scheduleArrivied, setScheduleArrivied] = useState(0);
  const [scheduleDate, setScheduleDate] = useState(null);
  const handleScheduleStageClick = () => {
    setIsPicked(true);
    setScheduleStage(scheduleStage + 1);
  };
  const handleReschedule = () => {
    setIsPicked(true);
    setScheduleStage(scheduleStage - 1);
  };

  const handleScheduleArriviedClicked = () =>{
    setIsPicked(true);
    setScheduleArrivied(scheduleArrivied + 1);
  }

  console.log({scheduleArrivied,scheduleStage})
  return (
    <>
      <Flex gap={"sm"} p={"sm"} w={"100%"}>
        <Flex direction={"column"} gap="sm" w="75%">
          <Paper className="layout" h="50%" radius={"md"}>
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
                {scheduleStage == 0 ? (
                  <DeliveryScheduledCard
                    isPicked={isPicked}
                    onScheduleClick={handleScheduleStageClick}
                  />
                ) : scheduleStage == 1 ? (
                  <DeliveredCard
                    isPicked={isPicked}
                    onScheduleClick={handleScheduleStageClick}
                  />
                ) : scheduleStage == 2 ? (
                  <SchedulePickup
                    isPicked={isPicked}
                    onBack={handleReschedule}
                    setScheduleDate={setScheduleDate}
                    scheduleDate={scheduleDate}
                    onScheduleClick={handleScheduleStageClick}
                  />
                ) : scheduleStage == 3 ? (
                  <PickupScheduledCard
                    isPicked={isPicked}
                    onBack={handleReschedule}
                    scheduleDate={scheduleDate}
                    // setScheduleStage = {setScheduleStage}
                    // onSubmitClick={() => setScheduling(true)}
                    // onBack={() => setScheduling(false)}
                  />
                ) : (
                  scheduleStage == 4 && <Completed />
                )}
              </Box>
            </Flex>
          </Paper>
          <Paper className="layout" h="calc(100vh - 580px)" p="lg">
            {scheduleArrivied == 0 ? (
              <ArrivalCard
                isPicked={isPicked}
                onScheduleClick={handleScheduleArriviedClicked}
              />
            ) : scheduleArrivied == 1 ? (
              <ArrivalCard
                isPicked={isPicked}
                onScheduleClick={handleScheduleArriviedClicked}
              />
            ) : scheduleArrivied == 2 ? (
              <ScheduleArricalCard
                isPicked={isPicked}
                onSubmitClick={() => setIsScheduled(true)}
                // onSubmitClick={() => setIsScheduled("INPROGRESS")}
                onBack={() => setScheduling(false)}
              />
            ) : null}
            
          </Paper>
          
        </Flex>
        <Flex direction={"column"} gap="sm" w={"25%"} h={"100%"}>
          <Paper className="layout" h="calc(100vh - 470px)">
            <AccessCode />
          </Paper>
          <Box className="transparent" h="20%">
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
          <Box className="transparent" h="20%">
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
