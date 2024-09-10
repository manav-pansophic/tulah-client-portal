import { Box, Flex, Grid, Paper, Skeleton } from '@mantine/core';

const CalendarPageSkeleton = () => {
  return (
    <Paper w="100%" h="100%" bg="none" mt={20}>
      <Grid gutter={20}>
        <Grid.Col span={{ base: 12, lg: 2, md: 3 }}>
          <Paper withBorder radius="sm" p={20}>
            <Grid>
              <Grid.Col span={12}>
                <Flex gap={10} direction="column">
                  <Skeleton animate h={30} w="50%" />
                  {Array(5)
                    .fill(null)
                    .map((_, ind) => (
                      <Skeleton animate h={30} key={ind} />
                    ))}
                </Flex>
              </Grid.Col>
              <Grid.Col span={12}>
                <Skeleton animate h={2} />
              </Grid.Col>
              <Grid.Col span={12}>
                <Skeleton animate h={30} w="50%" mb={10} />

                <Flex gap={10} direction="column">
                  {' '}
                  {Array(9)
                    .fill(null)
                    .map((_, ind) => (
                      <Skeleton animate h={40} key={ind} />
                    ))}
                </Flex>
              </Grid.Col>
            </Grid>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 10, md: 9 }}>
          <Paper withBorder radius="sm" p={22}>
            <Flex gap="lg" my={10} align="center" justify="space-between">
              <Flex align="center" w="15%" className="gap-2">
                <Skeleton animate h={35} />
                <Skeleton animate h={35} />
              </Flex>
              <Flex align="center" w="15%" className="gap-2">
                <Skeleton animate h={35} />
              </Flex>
              <Flex></Flex>
            </Flex>
            <Box className="grid grid-cols-7 gap-4 mt-5">
              {Array(35)
                .fill(null)
                .map((_, ind) => (
                  <Skeleton key={ind} animate h={122} />
                ))}
            </Box>
          </Paper>
        </Grid.Col>
      </Grid>{' '}
    </Paper>
  );
};

export default CalendarPageSkeleton;
