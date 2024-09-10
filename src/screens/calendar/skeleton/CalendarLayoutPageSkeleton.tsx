import CalendarPageSkeleton from '@/forms/entities/calendar/skeleton/CalendarPageSkeleton';
import { Paper, Skeleton } from '@mantine/core';

const CalendarLayoutPageSkeleton = () => {
  return (
    <Paper p={10} bg="none">
      <Skeleton animate h={30} w="10%" mb={15} />
      <CalendarPageSkeleton />
    </Paper>
  );
};

export default CalendarLayoutPageSkeleton;
