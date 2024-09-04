import { Avatar, Box, Flex, Group, Menu, Text } from "@pansophictech/base";
import classes from "../../app.module.css";
import { RiArrowDownSFill } from "@remixicon/react";

function UserDropdown() {
  return (
    <Box className={classes.bgForms} p="sm" style={{ borderRadius: "10px" }}>
      <Menu position="bottom" offset={20}>
        <Menu.Target>
          <Flex align="center" justify="space-between">
            <Group style={{ cursor: "pointer" }}>
              <Avatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="User Avatar"
                radius="xl"
              />
              <Text>Pedro Abbott</Text>
            </Group>
            <RiArrowDownSFill color="var(--mantine-color-theme-6)" />
          </Flex>
        </Menu.Target>

        <Menu.Dropdown w={"15.5%"} bg={"var(--mantine-color-theme-1)"}>
          <Menu.Item>
            <Group>
              <Avatar
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="User Avatar"
                radius="xl"
              />
              <Text>Belinda Abbott</Text>
            </Group>
          </Menu.Item>
          <Menu.Item>
            <Group>
              <Avatar
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="User Avatar"
                radius="xl"
              />
              <Text>Belinda Abbott</Text>
            </Group>
          </Menu.Item>
          <Menu.Item>
            <Group>
              <Avatar
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="User Avatar"
                radius="xl"
              />
              <Text>Belinda Abbott</Text>
            </Group>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
}

export default UserDropdown;
