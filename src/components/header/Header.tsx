import { Box, Flex } from "@pansophictech/base";
import { FC, ReactNode } from "react";

interface HeaderProps {
  logo?: ReactNode;
  tabs?: ReactNode;
  profile?: ReactNode;
}

const Header: FC<HeaderProps> = ({ logo, tabs, profile }) => {
  // Calculate dynamic widths based on the presence of logo, tabs, and profile
  const getWidths = () => {
    if (logo && !tabs && !profile) return { logoWidth: "100%" };
    if (!logo && tabs && !profile) return { tabsWidth: "100%" };
    if (!logo && !tabs && profile) return { profileWidth: "100%" };

    if (!logo && tabs && profile)
      return { tabsWidth: "85%", profileWidth: "15%" };
    if (!tabs && logo && profile)
      return { logoWidth: "50%", profileWidth: "50%" };
    if (!profile && logo && tabs) return { logoWidth: "15%", tabsWidth: "85%" };

    return { logoWidth: "10%", tabsWidth: "85%", profileWidth: "5%" };
  };

  const {
    logoWidth = "10%",
    tabsWidth = "80%",
    profileWidth = "10%",
  } = getWidths();

  return (
    <Flex gap="10px" mx="10px">
      {logo && (
        <Box
          data-test-id="logo-box"
          className="layout-bg-color header-layout"
          w={logoWidth}
        >
          {logo}
        </Box>
      )}
      {tabs && (
        <Box className="layout-bg-color header-layout" w={tabsWidth}>
          <Box>{tabs}</Box>
        </Box>
      )}
      {profile && (
        <Box className="layout-bg-color header-layout" w={profileWidth}>
          <Box>{profile}</Box>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
