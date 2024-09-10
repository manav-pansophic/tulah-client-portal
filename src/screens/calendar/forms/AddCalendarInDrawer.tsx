import { Box } from "@mantine/core";
import { FC } from "react";
import { AddOrEditInstanceForm } from "./AddOrEditInstanceForm";
export interface AddCalendarInDrawerT {
  eventType: any;
  close: () => void;
}
const AddCalendarInDrawer: FC<any> = ({ eventType, close }) => {
  return (
    <Box>
      <AddOrEditInstanceForm
        type="ADD"
        initialState={{ name: eventType.name }}
        taskId={eventType.id.toString()}
        close={close}
      />
    </Box>
  );
};

export default AddCalendarInDrawer;
