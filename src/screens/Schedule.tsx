import { Box, Flex, Paper } from "@pansophictech/base";
import "../components/layout/layout.css";
import AccessCode from "../components/Gnome/AccessCode";
import ScheduleAssessmentHelp from "../components/Gnome/ScheduleAssessmentHelp";
import { RiCheckboxCircleFill, RiPhoneFill } from "@remixicon/react";
import { useState } from "react";
import ScheduleStatusCard from "../components/Schedule/ScheduleStatusCard";
import ArrivalCard from "../components/Schedule/ArrivalCard";
import ScheduleArricalCard from "../components/Schedule/ScheduleArricalCard";

export const Schedule = () => {
  const [scheduling, setScheduling] = useState(false);
  const [isscheduled, setIsScheduled] = useState(false);
  const [statusType, setStatusType] = useState("CONFIRMED");
  const [isPicked, setIsPicked] = useState(false);
  return (
    <>
      <Flex gap={"sm"} p={"sm"} w={"100%"}>
        <Flex direction={"column"} gap="sm" w="75%">
          <Paper className="layout" h="calc(100vh - 561px)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quod, quasi iure impedit vel error nobis praesentium officiis unde
            est.
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
