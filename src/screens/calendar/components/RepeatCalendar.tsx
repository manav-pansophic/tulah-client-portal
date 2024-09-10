import InputMultiCheckbox from '@/forms/elements/components/InputMultiCheckbox';
import { RepeatCalendarProps } from '@/forms/entities/calendar/schema/addEdit.schema';
import { customOption, endsOptions, listOfDays } from '@/forms/entities/calendar/constant/calendar.constant';

import { FC } from 'react';
import { Box, Flex, Paper, Text } from '@mantine/core';
import { DateInput, NumberInput, RadioGroup, Select } from '@r3dm4st3r/react-hook-form';

const RepeatCalendar: FC<RepeatCalendarProps> = ({ watch }) => {
  return (
    <Paper withBorder className="p-5">
      <Box className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
        <NumberInput name="repeat_time" label="Repeat Every" props={{ withAsterisk: true }} />
        <Select
          label="Frequency"
          name="repeat_every"
          data={customOption.map(item => ({
            label: item.label,
            value: item.value
          }))}
          props={{ withAsterisk: true }}
        />
      </Box>
      {watch('repeat_every') === 'Week' && (
        <Box className="grid grid-cols-4 gap-y-4 ">
          <Flex mt={10} w="auto" gap={2}>
            <Text> Repeat on </Text>
            <Text
              style={{
                color: 'var(--mantine-color-error)'
              }}
            >
              *
            </Text>
          </Flex>
          <InputMultiCheckbox name="day" options={listOfDays} props={{ className: 'col-span-3 !mt-0' }} />
        </Box>
      )}
      <Box className="grid  gap-1 grid-cols-10 " mt={20}>
        <Flex mt={10} w="auto" gap={2}>
          <Text>Ends </Text>
          <Text
            style={{
              color: 'var(--mantine-color-error)'
            }}
          >
            *
          </Text>
        </Flex>
        <RadioGroup name="end_choice" label="" options={endsOptions} props={{ role: 'radio' }} />
        <div className="flex flex-col gap-y-2 col-start-4 col-end-10">
          <DateInput name="end" label="" props={{ minDate: new Date(), withAsterisk: true, prefix: '' }} />
          <div className="flex gap-5 py-2 rounded">
            <NumberInput name="occurrences" label="" props={{ withAsterisk: true }} />
            <Text mt={10} w="auto">
              {' '}
              Occurrences{' '}
            </Text>
          </div>
        </div>
      </Box>
    </Paper>
  );
};

export default RepeatCalendar;
