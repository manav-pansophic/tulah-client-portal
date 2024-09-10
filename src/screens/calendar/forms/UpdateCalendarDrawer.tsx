import AddOrEditInstanceForm from '@/forms/entities/calendar/forms/AddOrEditInstanceForm';
import { AddEditCalendarSchemaT, ViewCalendarEventT } from '@/forms/entities/calendar/schema/addEdit.schema';
import { FC } from 'react';
export interface UpdateCalendarDrawerT {
  typeInfo: ViewCalendarEventT['data'];
  instance: AddEditCalendarSchemaT;
  close: () => void;
}

const UpdateCalendarDrawer: FC<UpdateCalendarDrawerT> = ({ typeInfo, instance, close }) => {
  return (
    <AddOrEditInstanceForm
      initialState={{
        ...instance,
        name: typeInfo?.eventTitle ?? ''
      }}
      type="EDIT"
      taskId=""
      close={close}
    />
  );
};

export default UpdateCalendarDrawer;
