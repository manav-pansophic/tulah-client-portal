import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionGridPlugin from "@fullcalendar/interaction";
import { Box } from "@pansophictech/base";

export const Calendar = () => {
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
    // if (
    //   calendarApi?.view?.currentStart?.getMonth() !==
    //   calendarApi?.view?.currentEnd?.getMonth()
    // ) {
    //   getCalendarEvent(getStartOrEndFromDate(calendarApi?.view?.currentStart));
    // }
  };
  return (
    <Box p={20}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
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
        dayHeaderFormat={{
          weekday: "short",
        }}
        // eventClick={handleEventClick}
        // dateClick={handleDateClicked}
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
        events={[]}
        firstDay={1}
        height="calc(100vh - 165px)"
      />
    </Box>
  );
};
