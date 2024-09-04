import {
  Box,
  Button,
  Divider,
  ScrollAreaAutosize,
  TextInput,
} from "@pansophictech/base";
import UserCard from "./UserCard";
import { RiSearchLine, RiAddLine } from "@remixicon/react";

const sidebarData = [
  {
    name: "Pedro Abbott",
    avatar:
      "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    badgeName: "Guest 1",
    time: "1s",
  },
  {
    name: "Belinda Abbott",
    avatar:
      "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    badgeName: "Guest 2",
    time: "15m",
  },
];

const Sidebar = () => {
  return (
    <Box className="layout-bg-color navbar-layout" p={"sm"}>
      <Button
        variant="outline"
        radius={"lg"}
        w={"100%"}
        size="sm"
        my={8}
        // leftSection={<RiAddLine size={18} />}
      >
        + ADD NEW LEAD
      </Button>
      <Divider color="gray.5" mb={15} mt={7} />
      {/* <TextInput
        radius={"xl"}
        style={{
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: 10,
        }}
        placeholder="Search"
        rightSection={<RiSearchLine color="black" size={20} />}
      /> */}

      <ScrollAreaAutosize mah="calc(100vh - 270px)" scrollbarSize={2}>
        {sidebarData?.map((profile, index) => (
          <UserCard
            key={index}
            name={profile.name}
            avatar={profile.avatar}
            badgeName={profile.badgeName}
            // time={profile.time}
          />
        ))}
      </ScrollAreaAutosize>
    </Box>
  );
};

export default Sidebar;
