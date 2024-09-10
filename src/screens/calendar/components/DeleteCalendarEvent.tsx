import ConfirmDelete from '@/components/popup/new/ConfirmDelete';
import { useDeleteEventMutation } from '@/services/new/calendar/calendar.service';
import { DeleteEventPayload } from '@/forms/entities/calendar/schema/addEdit.schema';

import { FC } from 'react';
import { toast } from 'react-toastify';
import { closeAllModals } from '@mantine/modals';

interface DeleteCalendarEventT {
  data: DeleteEventPayload;
}
const DeleteCalendarEvent: FC<DeleteCalendarEventT> = ({ data }) => {
  const [deleteEvent, { isLoading }] = useDeleteEventMutation();

  const handleDelete = async data => {
    await deleteEvent(data.deleteObj)
      .unwrap()
      .catch(error => {
        const errorMessage = error?.data?.error?.message?.validation_error[0];
        toast.error(`${errorMessage}`);
        closeAllModals();
      });
  };

  return (
    <div>
      <ConfirmDelete name={`your ${data?.title}`} handleSubmit={() => handleDelete(data)} loading={isLoading} />
    </div>
  );
};

export default DeleteCalendarEvent;
