import {
  Box,
  Divider,
  Flex,
  Paper,
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
import DeliveryScheduledCard from "../components/schedule/kitstatus/DeliveryScheduledCard";
import DeliveredCard from "../components/schedule/kitstatus/DeliveredCard";
import TestStatus from "../components/gnome/TestStatus";
import SchedulePickup from "../components/schedule/kitstatus/SchedulePickup";
import PickupScheduledCard from "../components/schedule/kitstatus/PickupScheduledCard";
import Completed from "../components/schedule/kitstatus/Completed";

export const Schedule = () => {
  const [scheduling, setScheduling] = useState(false);
  const [isscheduled, setIsScheduled] = useState(false);
  const [statusType, setStatusType] = useState("INPROGRESS");
  const [isPicked, setIsPicked] = useState(true);
  return (
    <>
      <Flex gap={"sm"} p={"sm"} w={"100%"}>
        <Flex direction={"column"} gap="sm" w="75%">
          <Paper className="layout" h="calc(100vh - 561px)" p="lg">
            <Flex h="100%">
              <Flex direction={"column"}>
                <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
                  Report Status
                </Text>
                <Select
                  defaultValue={"user"}
                  data={[{ label: "Pedroo Abort", value: "user" }]}
                  w={"100%"}
                  pb={13}
                />
                <Stack w="300px">
                  <TestStatus
                    testIcon={
                      <RiDragMove2Line color="var(--mantine-color-theme-6)" />
                    }
                    testName="GNOME"
                    testStatus="To be done"
                  />
                  <TestStatus
                    testIcon={
                      <RiDragMove2Line color="var(--mantine-color-theme-6)" />
                    }
                    testName="GNOME"
                    testStatus="To be done"
                  />
                  <TestStatus
                    testIcon={
                      <RiDragMove2Line color="var(--mantine-color-theme-6)" />
                    }
                    testName="GNOME"
                    testStatus="To be done"
                  />
                </Stack>
              </Flex>
              <Divider orientation="vertical" m="lg" color="gray" />
              <Box>
                {/* <DeliveredCard
                  isPicked={isPicked}
                  onScheduleClick={() => setScheduling(true)}
                /> */}
                {/* <SchedulePickup
                  isPicked={isPicked}
                  onSubmitClick={() => setScheduling(true)}
                  onBack={() => setScheduling(false)}
                /> */}
                {/* <PickupScheduledCard
                  isPicked={isPicked}
                  onScheduleClick={() => setScheduling(true)}
                  // onSubmitClick={() => setScheduling(true)}
                  // onBack={() => setScheduling(false)}
                /> */}
                <Completed />
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
              description="Click to Call"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
