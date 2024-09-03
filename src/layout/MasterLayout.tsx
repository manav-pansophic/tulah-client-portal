import { Outlet } from "react-router-dom";
import { Box, Flex } from "@pansophictech/base";
import classes from "../app.module.css";
import Header from "../components/header/Header";

const MasterLayout = () => {
    const yes = true;
  return (
    <Box p={"md"}>
      <Header />
      <Flex>
        <h3>Sidebar</h3>

        {/* Body */}
        <Flex direction={"column"} w={"100%"}>
          <Box mt={"md"} ml={"md"} flex={1}>
            {yes ? (
              <>
                <Outlet />
              </>
            ) : (
              <>
                <Flex className={classes.flexRoot} h={"100%"}>
                    <div>
                        Nothing to display
                    </div>
                  <span style={{ fontSize: "30px" }}>Tulah</span>
                </Flex>
              </>
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export { MasterLayout };
