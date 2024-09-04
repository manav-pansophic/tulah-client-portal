import { Box, Flex, Paper, Text } from "@pansophictech/base";
import "../components/layout/layout.css";
import ArrivalCard from "../components/Schedule/ArrivalCard";
import ScheduleArricalCard from "../components/Schedule/ScheduleArricalCard";
import { useState } from "react";
import ScheduleStatusCard from "../components/Schedule/ScheduleStatusCard";

export const Schedule = () => {
  const [scheduling, setScheduling] = useState(false);
  const [isscheduled, setIsScheduled] = useState(false);
  const [statusType, setStatusType] = useState("CONFIRMED");

  // const [isPicked, setIsPicked] = useState(false);
  const isPicked = true;
  return (
    <>
      <Flex gap="sm" p="sm">
        <Box>
          <Flex direction={"column"} gap="sm" w="calc(100vw - 500px)">
            <Paper className="layout" h="calc(100vh - 550px)">
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
          </Flex>
        </Box>

        <Box>
          <Flex direction={"column"} gap="sm">
            <Paper className="layout" h="calc(100vh - 440px)">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              quod, quasi iure impedit vel error nobis praesentium officiis unde
              est.
            </Paper>
            <Paper className="layout" h="calc(100vh - 825px)">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              quod, quasi iure impedit vel error nobis praesentium officiis unde
              est.
            </Paper>
            <Paper className="layout" h="calc(100vh - 825px)">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              quod, quasi iure impedit vel error nobis praesentium officiis unde
              est.
            </Paper>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
