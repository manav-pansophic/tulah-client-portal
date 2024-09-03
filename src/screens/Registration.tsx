import { Box } from "@pansophictech/base";
import "../components/layout/layout.css";
import RegistrationForm from "../components/forms/guest/RegistrationForm";

export const Registration = () => {
  return (
    <Box className="layout-bg-color main-layout" h="calc(100vh - 110px)">
      <RegistrationForm />
    </Box>
  );
};
