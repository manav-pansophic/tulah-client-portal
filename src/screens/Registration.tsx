import { Box, Flex } from "@pansophictech/base";
import "../components/layout/layout.css";
import Sidebar from "../components/sidebar/Sidebar";
import RegistrationForm from "../components/forms/guest/RegistrationForm";

export const Registration = () => {
  return (
    <Flex>
      <Sidebar />
      <Box className="layout-bg-color main-layout" h="calc(100vh - 110px)">
        <RegistrationForm />
      </Box>
    </Flex>
  );
};
