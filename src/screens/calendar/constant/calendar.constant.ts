import { arrayOptionsT, checkBoxOptionsT } from '@/forms/entities/calendar/schema/addEdit.schema';

export const TIME_CHOICE: { label: string; value: string }[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];

export enum EventType {
  Event = 1,
  Meeting = 2,
  Reminder = 3,
  Interview = 4
}

export const specificTimeSlotOptions: Array<arrayOptionsT> = [{ label: 'Specific Time', value: 'specific_time' }];

export const allTimeSlotOptions: Array<arrayOptionsT> = [
  ...specificTimeSlotOptions,
  { label: 'All Day', value: 'all_day' }
];

export const interviewMemberOptions: Array<arrayOptionsT> = [{ label: 'Select Members', value: 'members' }];

export const memberOptions: Array<arrayOptionsT> = [
  { label: 'All Team', value: 'is_all_team' },
  { label: 'Select Teams', value: 'team' },
  ...interviewMemberOptions
];

export const endsOptions: Array<arrayOptionsT> = [
  { label: 'On', value: 'On' },
  { label: 'After', value: 'After' }
];

export const customOption: Array<arrayOptionsT> = [
  { label: 'Day', value: 'Day' },
  { label: 'Week', value: 'Week' },
  { label: 'Month', value: 'Month' },
  { label: 'Year', value: 'Year' }
];

export const listOfDays: Array<checkBoxOptionsT> = [
  { label: 'Sunday', value: 'Sunday' },
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' }
];
