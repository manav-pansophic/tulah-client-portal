import { Box, Flex, Paper, Text } from "@pansophictech/base";
import "../components/layout/layout.css";
import ArrivalCard from "../components/Schedule/ArrivalCard";
import ScheduleArricalCard from "../components/Schedule/ScheduleArricalCard";
import { useState } from "react";

export const Schedule = () => {
  const [isScheduling, setIsScheduling] = useState(false);
  // const [isPicked, setIsPicked] = useState(false);
  const isPicked = false;
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
            {!isScheduling ? (
              <Paper className="layout" h="calc(100vh - 555px)" p="lg">
                <ArrivalCard
                  isPicked={isPicked}
                  onScheduleClick={() => setIsScheduling(true)}
                />
              </Paper>
            ) : (
              <Paper
                bg="var(--mantine-color-theme-0)"
                h="calc(100vh - 555px)"
                p="lg"
              >
                <ScheduleArricalCard isPicked={isPicked} />
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
