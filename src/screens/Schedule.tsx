import { Box, Flex, Paper } from "@pansophictech/base";
import "../components/layout/layout.css";

export const Schedule = () => {
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
            <Paper className="layout" h="calc(100vh - 555px)">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              quod, quasi iure impedit vel error nobis praesentium officiis unde
              est.
            </Paper>
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
