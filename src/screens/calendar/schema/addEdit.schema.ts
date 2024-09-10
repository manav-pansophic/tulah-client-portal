import { DateClickArg } from '@fullcalendar/interaction/index.js';
import { UseFormWatch } from 'react-hook-form';
import { z } from 'zod';

export const CalendarAddEditSchema = z
  .object({
    title: z
      .string()
      .min(2, { message: 'Title must be at least 2 characters.' })
      .max(60, { message: 'Title must be at most 60 characters.' })
      .regex(/^[a-zA-Z0-9_ ]+$/, { message: 'Only letters, numbers, and special characters like _ are allowed.' }),
    description: z
      .string()
      .min(2, { message: 'Description must be at least 2 characters.' })
      .max(60, { message: 'Description must be at most 60 characters.' }),
    time_choice: z.string().refine(value => value !== '', {
      message: 'Please select any one time slot.'
    }),
    start: z.union([z.string(), z.date()]).refine(value => value !== '', {
      message: 'Start date is required.'
    }),
    start_time: z.string().optional(),
    end_time: z.string().optional(),
    repeat_every: z.string().optional(),
    day: z.array(z.string()).optional(),
    end_choice: z.string().optional(),
    end: z.union([z.string(), z.date()]),
    occurrences: z.number().optional().nullable(),
    repeat_time: z.number().refine(value => value > 0, {
      message: 'Repeat every occurrence is required and must be greater than 0.'
    }),
    team: z.array(z.string()).optional(),
    members: z.array(z.string()).optional(),
    notification_time: z
      .number()
      .refine(value => value > 0, {
        message: 'Notification time is required and must be greater than 0.'
      })
      .optional(),
    member_type: z.string().nullable().optional(),
    task: z.union([z.string(), z.number()]).optional(),
    is_all_team: z.boolean().nullable().optional(),
    members_name: z.array(z.string()),
    team_name: z.array(z.string()),
    is_notify: z.boolean().nullable().optional(),
    is_repeat: z.boolean().nullable().optional(),
    deleted_date: z.string().nullable().optional(),
    id: z.union([z.string(), z.number()]).nullable().optional(),
    name: z.string().optional().nullable()
  })
  .superRefine((data, ctx) => {
    if (data.start_time && data.end_time) {
      const startTime = parseInt(data.start_time.replace(':', ''));
      const endTime = parseInt(data.end_time.replace(':', ''));
      if (startTime >= endTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Start time must be before end time.',
          path: ['end_time']
        });
      }
    }
    if (data.time_choice === 'specific_time') {
      if (!data.start_time || data.start_time === '00:00') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Start time is required and must be greater than 00:00.',
          path: ['start_time']
        });
      }
      if (!data.end_time || data.end_time === '00:00' || data.start_time === '00:00') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'End time is required and must be greater than 00:00.',
          path: ['end_time']
        });
      }
    }
    if (data.member_type === 'team' && data.team.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Team is required',
        path: ['team']
      });
    }
    if (data.member_type === 'members' && data.members.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Members  is required',
        path: ['members']
      });
    }
    if (data.is_repeat && data.repeat_every === 'Week' && data.day.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'At least one day must be selected.',
        path: ['day']
      });
    }
    if (data.is_repeat && !data.end_choice) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Selection is required.',
        path: ['end_choice']
      });
    }
    if (data.is_repeat && !data.repeat_every) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Selection is required.',
        path: ['repeat_every']
      });
    }
    if (data.is_repeat && data.end_choice === 'On' && (!data.end || data.end === '')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'End date is required.',
        path: ['end']
      });
    }
    if (data.is_repeat && data.end_choice === 'After' && (data.occurrences <= 0 || !data.occurrences)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Occurrences is required and must be greater than 0.',
        path: ['occurrences']
      });
    }
  });

export type AddEditCalendarSchemaT = z.infer<typeof CalendarAddEditSchema>;

export const addEditInstals: AddEditCalendarSchemaT = {
  task: '',
  title: '',
  description: '',
  start: '',
  end: '',
  start_time: '',
  end_time: '',
  time_choice: 'specific_time',
  occurrences: 1,
  repeat_every: 'Day',
  end_choice: 'On',
  repeat_time: 1,
  day: [],
  member_type: 'is_all_team',
  is_all_team: false,
  members: [],
  members_name: [],
  team: [],
  team_name: [],
  is_notify: false,
  notification_time: 30,
  is_repeat: false,
  deleted_date: '[]',
  id: '',
  name: ''
};

export type arrayOptionsT = {
  label: string;
  value: string;
};

export type checkBoxOptionsT = {
  label: string;
  value: string;
};

export interface CalenderAddEditFormProps {
  initialState: Record<string, any>;
}

export interface RepeatCalendarProps {
  watch: UseFormWatch<Record<string, any>>;
}
export interface EventT {
  id: string;
  calendar_id: number;
  title: string;
  description: string;
  task_date: Date;
  start_time: string;
  end_time: string;
  time_choice: string;
  start: string;
  end: string;
  allDay: boolean;
  task_name: string;
  color: string;
}
export interface CalendarEventT {
  data: EventT[];
}

export interface EventType {
  id: string;
  name: string;
  color: string;
}

export interface DeleteEventData {
  delete_date: string | Date | DateClickArg;
  delete_time: string;
  specific_delete: boolean;
  eventId: string;
}

export interface DeleteEventPayload {
  deleteObj: DeleteEventData;
  title: string;
}

export interface ViewCalendarEventT {
  data: {
    eventId: string;
    eventTitle: string;
    selectedDate: Date;
  };
}

export interface CalendarEventTypeT {
  id: number;
  created_at: string;
  modified_at: string;
  deleted_at: string | null;
  is_active: boolean;
  name: string;
  color: string;
  bg_color: string;
  created_by: string;
  modified_by: number;
  deleted_by: string;
}

export interface EventResponseT {
  response: CalendarEventTypeT[];
}
