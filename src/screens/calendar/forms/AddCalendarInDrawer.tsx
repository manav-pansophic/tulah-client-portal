import AddOrEditInstanceForm from '@/forms/entities/calendar/forms/AddOrEditInstanceForm';
import { Box } from '@mantine/core';
import { FC } from 'react';
import { CalendarEventTypeT } from '@/forms/entities/calendar/schema/addEdit.schema';
export interface AddCalendarInDrawerT {
  eventType: CalendarEventTypeT;
  close: () => void;
}
const AddCalendarInDrawer: FC<AddCalendarInDrawerT> = ({ eventType, close }) => {
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
