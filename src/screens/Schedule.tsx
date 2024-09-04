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
import AccessCode from "../components/Gnome/AccessCode";
import ScheduleAssessmentHelp from "../components/Gnome/ScheduleAssessmentHelp";
import {
  RiCheckboxCircleFill,
  RiDragMove2Line,
  RiPhoneFill,
} from "@remixicon/react";
import { useState } from "react";
import ScheduleStatusCard from "../components/Schedule/ScheduleStatusCard";
import ArrivalCard from "../components/Schedule/ArrivalCard";
import ScheduleArricalCard from "../components/Schedule/ScheduleArricalCard";
import DeliveryScheduledCard from "../components/Schedule/kitstatus/DeliveryScheduledCard";
import DeliveredCard from "../components/Schedule/kitstatus/DeliveredCard";
import TestStatus from "../components/Gnome/TestStatus";

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
              <Box py="md" my="xl">
                <DeliveredCard
                  isPicked={isPicked}
                  onScheduleClick={() => setScheduling(true)}
                />
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
