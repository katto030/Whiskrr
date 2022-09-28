import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
  start?: Date;
  end?: Date;
}

const CalendarApp = () => {
  const [allEvents, setAllEvents] = useState<EventsInterface[]>(dummy)
  const [newEvent, setNewEvent] = useState({title: "", start: new Date(), end: new Date()})
  const [calShow, setCalShow] = useState(false);


  const handleCalClose = () => setCalShow(false);
  const handleCalOpen = () => setCalShow(true);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <Container id="calendar-app" className="component-container">
      <h5>Foster Calendar</h5>
      <>
        <Button className="pink-hover-btn" variant="outline-danger" onClick={handleCalOpen}>
          View Calendar
        </Button>
        <Modal dialogClassName="modal-lg" show={calShow} onHide={handleCalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Foster Calendar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Calendar
              localizer={localizer}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              style={{height: 500, width: '100%'}}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="pink-hover-btn" onClick={handleCalClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </>
      <Container id="calendar-headers">
        <Container id="datepicker-container">
          <Row>
            <Col><p>Add Event name: </p></Col>
            <Col>
              <input
                className="datepicker"
                type="text"
                placeholder="Add Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            ></input>
            </Col>
          </Row>
          <Row>
            <Col><p>Start Date</p></Col>
            <Col>
              <DatePicker
                className="datepicker"
                selected={newEvent.start}
                onChange={(start:Date) => setNewEvent({...newEvent, start})}
              />
            </Col>
          </Row>
          <Row>
            <Col><p>End Date</p></Col>
            <Col>
             <DatePicker
              selected={newEvent.end}
              className="datepicker"
              onChange={(end:Date) => setNewEvent({...newEvent, end})}
              />
            </Col>
          </Row>
          <button
            className="pink-hover-btn"
            onClick={() => handleAddEvent()}>
            Add Event
          </button>
        </Container>
      </Container>

    </Container>
  )
}

export default CalendarApp;