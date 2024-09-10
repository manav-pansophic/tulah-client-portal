import NoDataFound from '@/components/table/action/NoDataFound';
import EventPage from './EventPage';
import InterviewPage from './InterviewPage';
import MeetingPage from './MeetingPage';
import ReminderTab from './ReminderTab';
import { FC, cloneElement } from 'react';
import { AddEditCalendarSchemaT } from '../schema/addEdit.schema';

const eventComponents = {
  interview: <InterviewPage type="" eventType={null} taskId={''} />,
  meeting: <MeetingPage type="" eventType={null} taskId={''} />,
  event: <EventPage type="" eventType={null} taskId={''} />,
  reminder: <ReminderTab type="" eventType={null} taskId={''} />,
  default: <NoDataFound />
};
// Function to get the icon component based on the icon name
const getFormComponent = name => {
  return eventComponents[name] || eventComponents.default;
};

const CalendarEventTab: FC<{ eventType: AddEditCalendarSchemaT; type: string; taskId: string }> = ({
  eventType,
  type,
  taskId
}) => {
  return (
    <div>
      {cloneElement(getFormComponent(eventType?.name?.toLowerCase()), {
        eventType: eventType,
        type: type,
        taskId: taskId
      })}
    </div>
  );
};

export default CalendarEventTab;
