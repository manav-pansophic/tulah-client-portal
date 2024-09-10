import { FC } from 'react';
import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Flex, Paper, ScrollArea, Text } from '@mantine/core';
import { Checkbox, DateInput, Input, RadioGroup, Textarea } from '@r3dm4st3r/react-hook-form';

import {
  AddEditCalendarSchemaT,
  addEditInstals,
  CalendarAddEditSchema
} from '@/forms/entities/calendar/schema/addEdit.schema';
import InputNumber from '@/forms/elements/components/InputNumber';
import InputSwitch from '@/forms/elements/components/InputSwitch';
import { serverResponseErrors } from '@/forms/entities/forms.utils';
import MultiSelectTeams from '@/forms/dropdowns/multiples/MultiSelectTeams';
import { API_DATE_FORMAT } from '@/services/new/settings/settings.constant';
import RepeatCalendar from '@/forms/entities/calendar/components/RepeatCalendar';
import MultiSelectActiveUsers from '@/forms/dropdowns/multiples/MultiSelectActiveUsers';
import { allTimeSlotOptions, memberOptions } from '@/forms/entities/calendar/constant/calendar.constant';
import { useCalendarEventMutation, useUpdateCalendarEventMutation } from '@/services/new/calendar/calendar.service';
import { closeAllModals } from '@mantine/modals';

const AddOrEditInstanceForm: FC<{
  initialState: AddEditCalendarSchemaT;
  type: string;
  taskId?: string;
  close?: () => void;
}> = ({ initialState, type, taskId, close }) => {
  const eventType = initialState?.name?.toLowerCase();
  const [calendarEvent, { isLoading }] = useCalendarEventMutation();
  const [updateCalendarEvent, { isLoading: updateEvent }] = useUpdateCalendarEventMutation();

  const methods = useForm<AddEditCalendarSchemaT>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(CalendarAddEditSchema),
    defaultValues: type === 'EDIT' ? initialState : { ...addEditInstals, task: taskId }
  });

  const handleFormSubmit = async values => {
    const transformedData = {
      ...values,
      start: dayjs(values['start']).format(API_DATE_FORMAT),
      end: dayjs(values?.is_repeat && values['end_choice'] === 'On' ? values['end'] : values['start']).format(
        API_DATE_FORMAT
      ),
      is_all_team: values?.member_type === 'is_all_team',
      day: values?.day || [],
      time_choice: values?.is_repeat ? 'repeat' : values?.time_choice
    };
    if (transformedData.time_choice === 'all_day') {
      delete transformedData.start_time;
      delete transformedData.end_time;
    }
    if (type === 'EDIT') {
      await updateCalendarEvent({ data: transformedData })
        .then(() => {
          close();
          closeAllModals();
        })
        .catch(errors => {
          serverResponseErrors(errors?.data?.error, methods);
        });
    } else {
      await calendarEvent({ data: transformedData })
        .then(() => {
          close();
          closeAllModals();
        })
        .catch(errors => {
          serverResponseErrors(errors?.data?.error, methods);
        });
    }
  };
  const { watch } = methods;
  return (
    <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
      <FormProvider {...methods}>
        <Paper>
          <ScrollArea h="calc(100vh - 119px)">
            <Box p="lg" className="grid grid-cols-1 gap-5">
              <Input name="title" label="Title" props={{ withAsterisk: true }} />
              <Textarea label="Description" name="description" props={{ minRows: 4 }} />
              <DateInput label="Start Date" name="start" props={{ withAsterisk: true, minDate: new Date() }} />
              <Box>
                {(eventType === 'event' || eventType === 'meeting') && (
                  <>
                    {' '}
                    <Text fz={14} fw={500} mb={5}>
                      Time slots
                    </Text>
                    <RadioGroup name="time_choice" options={allTimeSlotOptions} props={{ variant: 'outline' }} />
                  </>
                )}
                {(watch('time_choice') === 'specific_time' ||
                  eventType === 'interview' ||
                  eventType === 'reminder') && (
                  <Box className="mt-4 grid grid-cols-2 gap-5">
                    <Input name="start_time" label="Start Time" props={{ withAsterisk: true, type: 'time' }} />
                    <Input name="end_time" label="End Time" props={{ withAsterisk: true, type: 'time' }} />
                  </Box>
                )}
              </Box>
              <Box>
                <RadioGroup name="member_type" options={memberOptions} />
                <Box mt={10}>
                  {watch('member_type') === 'team' && (
                    <MultiSelectTeams
                      name="team"
                      label="Teams"
                      props={{
                        withAsterisk: true
                      }}
                    />
                  )}
                  {watch('member_type') === 'members' && (
                    <MultiSelectActiveUsers
                      name="members"
                      label="Members"
                      props={{
                        withAsterisk: true
                      }}
                    />
                  )}
                </Box>
              </Box>

              {eventType !== 'reminder' && (
                <Box className="mt-2">
                  <Checkbox label="Repeat" name="is_repeat" />
                  {watch('is_repeat') && (
                    <Box className="mt-5 w-full">
                      {' '}
                      <RepeatCalendar watch={watch}></RepeatCalendar>{' '}
                    </Box>
                  )}
                </Box>
              )}
              <Flex gap={20}>
                <InputSwitch
                  name="is_notify"
                  label="Send notification"
                  props={{ onLabel: 'On', offLabel: 'Off', my: 'sm' }}
                />

                {watch('is_notify') && (
                  <Text className="bg-gray-100 border-transparent flex rounded w-fit">
                    <Text className="w-[70px]">
                      <InputNumber name="notification_time" label="" />
                    </Text>
                    <Text>
                      <Text className="flex item-center text-sm  px-2 py-1 mt-[5px] bg-gray-100 rounded">Minutes</Text>
                    </Text>
                  </Text>
                )}
              </Flex>
            </Box>
          </ScrollArea>
          <Flex align="center" p="sm" style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
            <Button
              w={300}
              type="submit"
              variant="outline"
              loading={isLoading || updateEvent}
              disabled={!methods.formState.isValid}
            >
              Save
            </Button>
          </Flex>
        </Paper>
      </FormProvider>
    </form>
  );
};

export default AddOrEditInstanceForm;
