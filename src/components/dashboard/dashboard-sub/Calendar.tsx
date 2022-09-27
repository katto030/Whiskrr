import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const dummy = [
  {
    title: "Kita Clinic Visit",
    start: new Date(2022, 8, 27),
    end: new Date(2022, 9, 1)
  }
]

interface EventsInterface {
  title: string;
  start: Date;
  end: Date;
}

console.log('events', dummy)

const CalendarApp = () => {
  const [events, setEvents] = useState<EventsInterface[]>([])
  useEffect(() => {
    setEvents(dummy);
  }, [])
  return (
    <div>
      Calendar
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, width: '80%'}}
      />
    </div>
  )
}

export default CalendarApp;