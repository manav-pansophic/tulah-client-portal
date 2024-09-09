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
import { closeAllModals, openModal } from "@pansophictech/modals";
import { useGetAllGuestListQuery } from "../../services/guests/guestServices";
import { useDispatch } from "react-redux";
import { setGuestUserData } from "../../store/slices/guestUserSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { data } = useGetAllGuestListQuery();
  const guestList = data?.results;

  const handleUserCardClick = (guestData) => {
    dispatch(setGuestUserData(guestData));
  };

  return (
    <Box className="layout-bg-color navbar-layout" p={"sm"}>
      <Button
        variant="outline"
        radius={"lg"}
        w={"100%"}
        size="sm"
        my={8}
        data-test-id="add-new-guest-button"
        onClick={() =>
          openModal({
            centered: true,
            closeOnClickOutside: true,
            overlayProps: { blur: 3 },
            title: <Text fw={600}>Add New Guest</Text>,
            transitionProps: { transition: "pop", duration: 200 },
            children: <GuestPopup closeAllModal={closeAllModals} />,
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
        data-test-id="search-input"
        rightSection={<RiSearchLine color="black" size={20} />}
      />

      <ScrollAreaAutosize mah="calc(100vh - 270px)" scrollbarSize={2}>
        {guestList?.map((guest, index) => {
          return (
            <UserCard
              key={index}
              name={`${guest.firstName} ${guest.lastName}`}
              // avatar={profile.avatar}
              badgeName={`Guest ${index + 1}`}
              onClick={() => handleUserCardClick(guest)}
            />
          );
        })}
      </ScrollAreaAutosize>
    </Box>
  );
};

export default Sidebar;
