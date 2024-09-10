import { FC } from 'react';
import AddOrEditInstanceForm from '../forms/AddOrEditInstanceForm';
import { AddEditCalendarSchemaT } from '../schema/addEdit.schema';

const InterviewPage: FC<{ eventType: AddEditCalendarSchemaT; type: string; taskId: string }> = ({
  eventType,
  type,
  taskId
}) => {
  return (
    <div>
      <AddOrEditInstanceForm initialState={{ ...eventType }} type={type} taskId={taskId} />
    </div>
  );
};

export default InterviewPage;
