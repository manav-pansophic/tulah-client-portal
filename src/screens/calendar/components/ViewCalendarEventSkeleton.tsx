import { FC } from 'react';
import { Box, Flex, Skeleton } from '@mantine/core';

const ViewCalendarEventSkeleton: FC = () => {
  return (
    <Box className="grid grid-cols-1 gap-4">
      <Flex align="center" gap="md">
        <Skeleton variant="circle" width={30} height={30} />
        <Skeleton width="92%" height={25} />
      </Flex>
      <Flex align="center" gap="md">
        <Skeleton variant="circle" width={30} height={30} />
        <Skeleton width="92%" height={25} />
      </Flex>
      <Flex align="center" gap="md">
        <Skeleton variant="circle" width={30} height={30} />
        <Skeleton width="92%" height={25} />
      </Flex>
      <Flex align="center" gap="md">
        <Skeleton variant="circle" width={30} height={30} />
        <Skeleton width="92%" height={25} />
      </Flex>
      <Flex align="center" gap="md">
        <Skeleton variant="circle" width={30} height={30} />
        <Skeleton width="92%" height={25} />
      </Flex>
      <Flex align="center" gap="md">
        <Skeleton variant="circle" width={30} height={30} />
        <Skeleton width="92%" height={25} />
      </Flex>
    </Box>
  );
};

export default ViewCalendarEventSkeleton;
