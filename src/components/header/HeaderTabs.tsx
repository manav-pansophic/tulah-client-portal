import { Flex, Tabs } from "@pansophictech/base";
import { FC } from "react";
import timeLineCss from "./header.module.css";
import { useNavigate } from "react-router-dom";

interface TabData {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavTabsProps {
  tabsData: TabData[];
}

const HeaderTabs: FC<NavTabsProps> = ({ tabsData }) => {
  const navigate = useNavigate();
  return (
    <Flex justify={"center"} align={"center"} h="80px" gap="sm">
      <Tabs variant="pills" radius="xl" classNames={timeLineCss}>
        <Tabs.List grow>
          {tabsData.map((tab) => (
            <Tabs.Tab
              data-test-id={`tab-${tab.value}`}
              onClick={() => navigate(`/${tab.value}`)}
              key={tab.value}
              value={tab.value}
              leftSection={tab.icon}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Flex>
  );
};

export default HeaderTabs;
