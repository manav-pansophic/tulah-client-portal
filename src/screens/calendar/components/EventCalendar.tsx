import React, { FC, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventClickArg } from "@fullcalendar/core/index.js";
import { DateClickArg } from "@fullcalendar/interaction/index.js";
import interactionGridPlugin from "@fullcalendar/interaction";
import "./EventCalendar.css";
// import { getStartOrEndFromDate } from '@/utility/new/function';
import { EventT } from "@/forms/entities/calendar/schema/addEdit.schema";
import { getStartOrEndFromDate } from "../../../utils/functions";
interface EventCalendarProps {
  eventData: EventT[];
  handleEventClick: (info: EventClickArg) => void;
  handleDateClicked: (arg: DateClickArg) => void;
  getCalendarEvent: (params: { start: string; end: string }) => void;
}

const EventCalendar: FC<any> = ({
  eventData,
  handleEventClick,
  handleDateClicked,
  getCalendarEvent,
}) => {
  const calendarRef: React.LegacyRef<FullCalendar> = useRef(null);

  const handlePrevNextNavigation = (prevOrNextOrToday) => {
    const calendarApi = calendarRef.current.getApi();
    if (prevOrNextOrToday === "prev") {
      calendarApi.prev();
    } else if (prevOrNextOrToday === "next") {
      calendarApi.next();
    } else {
      calendarApi.today();
    }
    if (
      calendarApi?.view?.currentStart?.getMonth() !==
      calendarApi?.view?.currentEnd?.getMonth()
    ) {
      getCalendarEvent(getStartOrEndFromDate(calendarApi?.view?.currentStart));
    }
  };

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionGridPlugin]}
      initialView="dayGridMonth"
      dayCellClassNames="calendarEvent-dayCell"
      weekends={true}
      fixedWeekCount={false}
      navLinks={false}
      dayMaxEvents={true}
      selectable={true}
      viewClassNames="Monthly"
      views={{
        timeGridWeek: {
          dayHeaderFormat: { month: "short", day: "2-digit" },
        },
      }}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      // headerToolbar={{
      //   left: 'prev,next today',
      //   center: 'title',
      //   right: ''
      // }}
      dayHeaderFormat={{
        weekday: "short",
      }}
      eventClick={handleEventClick}
      dateClick={handleDateClicked}
      customButtons={{
        prev: {
          text: "Prev",
          click: () => handlePrevNextNavigation("prev"),
        },
        next: {
          text: "Next",
          click: () => handlePrevNextNavigation("next"),
        },
        today: {
          text: "Today",
          click: () => handlePrevNextNavigation("today"),
        },
      }}
      eventTimeFormat={{
        hour: "numeric",
        minute: "2-digit",
        meridiem: "short",
      }}
      events={eventData ?? []}
      firstDay={1}
      height="calc(100vh - 165px)"
    />
  );
};

export default EventCalendar;
