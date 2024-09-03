import { Flex, Tabs } from "@pansophictech/base";
import { FC } from "react";
import timeLineCss from "./header.module.css";

interface TabData {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavTabsProps {
  tabsData: TabData[];
}

const HeaderTabs: FC<NavTabsProps> = ({ tabsData }) => {
  return (
    <Flex justify={"center"} align={"center"} h="53px" gap="sm">
      <Tabs variant="pills" radius="xl" classNames={timeLineCss}>
        <Tabs.List grow>
          {tabsData.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value} leftSection={tab.icon}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Flex>
  );
};

export default HeaderTabs;
