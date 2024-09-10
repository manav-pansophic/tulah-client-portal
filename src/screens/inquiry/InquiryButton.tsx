import { Button, ScrollAreaAutosize, Text } from "@pansophictech/base";
import { openModal } from "@pansophictech/modals";
import { AddInquiryModal } from "./AddInquiryModal";

export const InquiryButton = () => {
  return (
    <Button
      size="sm"
      radius={"lg"}
      variant="outline"
      tt={"uppercase"}
      lts={"2px"}
      className="layout"
      c={"black"}
      fw={600}
      px={40}
      onClick={() =>
        openModal({
          withCloseButton: false,
          centered: true,
          closeOnClickOutside: true,
          overlayProps: { blur: 3 },
          title: <Text fw={600}>Raise an Inquiry</Text>,
          transitionProps: { transition: "pop", duration: 200 },
          children: <AddInquiryModal />,
          scrollAreaComponent: ScrollAreaAutosize,
          size: "md",
          radius: "md",
        })
      }
    >
      Raise Inquiry
    </Button>
  );
};
