import { Flex, Paper } from "@pansophictech/base";
import "../components/layout/layout.css";

export const Schedule = () => {
  return (
    <>
      <Flex gap={"sm"} p={"sm"} w={"100%"}>
        <Flex direction={"column"} gap="sm" w="75%">
          <Paper className="layout" h="calc(100vh - 561px)">
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
        <Flex direction={"column"} gap="sm" w={"25%"}>
          <Paper className="layout" h="calc(100vh - 470px)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quod, quasi iure impedit vel error nobis praesentium officiis unde
            est.
          </Paper>
          <Paper className="layout" h="calc(100vh - 820px)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quod, quasi iure impedit vel error nobis praesentium officiis unde
            est.
          </Paper>
          <Paper className="layout" h="calc(100vh - 820px)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quod, quasi iure impedit vel error nobis praesentium officiis unde
            est.
          </Paper>
        </Flex>
      </Flex>
    </>
  );
};
