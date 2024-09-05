import {
  Box,
  Button,
  Divider,
  ScrollAreaAutosize,
  Text,
  TextInput,
} from "@pansophictech/base";
import UserCard from "./UserCard";
import { RiSearchLine } from "@remixicon/react";
import GuestPopup from "../forms/guest/GuestPopup";
import { openModal } from "@pansophictech/modals";

const sidebarData = [
  {
    name: "John Doe",
    avatar:
      "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    badgeName: "New",
    time: "1s",
  },
  {
    name: "Jane Smith",
    avatar:
      "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    badgeName: "Verifying",
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
        onClick={() =>
          openModal({
            centered: true,
            closeOnClickOutside: false,
            overlayProps: { blur: 3 },
            title: <Text fw={600}>Add new Guest</Text>,
            transitionProps: { transition: "pop", duration: 200 },
            children: <GuestPopup />,
            scrollAreaComponent: ScrollAreaAutosize,
            size: "md",
          })
        }
      >
        + ADD NEW GUEST
      </Button>
      <Divider color="gray.5" mb={15} mt={7} />
      <TextInput
        radius={"xl"}
        style={{
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: 10,
        }}
        placeholder="Search"
        rightSection={<RiSearchLine color="black" size={20} />}
      />

      <ScrollAreaAutosize mah="calc(100vh - 270px)" scrollbarSize={2}>
        {sidebarData?.map((profile, index) => (
          <UserCard
            key={index}
            name={profile.name}
            avatar={profile.avatar}
            badgeName={profile.badgeName}
            time={profile.time}
          />
        ))}
      </ScrollAreaAutosize>
    </Box>
  );
};

export default Sidebar;
