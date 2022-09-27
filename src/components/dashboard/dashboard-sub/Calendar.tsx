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
  start?: Date | string;
  end?: Date | string;
}

console.log('events', dummy)

const CalendarApp = () => {
  const [allEvents, setAllEvents] = useState<EventsInterface[]>(dummy)
  const [newEvent, setNewEvent] = useState({title: "", start: new Date(), end: new Date()})

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <h2>Add new Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        ></input>
        <p>Start Date</p>
        <DatePicker
          placeholderText="Start Date"
          selected={newEvent.start}
          onChange={(start:Date) => setNewEvent({...newEvent, start})}
        />
        <p>End Date</p>
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end:Date) => setNewEvent({...newEvent, end})}
        />

        <button
          onClick={() => handleAddEvent()}>
          Add Event
        </button>

      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, width: '80%'}}
      />
    </div>
  )
}

export default CalendarApp;