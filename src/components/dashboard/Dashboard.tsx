import React from "react";
import CalendarApp from "./Calendar";
import CurrentFoster from "./CurrentFoster";
import DailyLog from "./DailyLog";
import FormList from "./FormList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  user: string;
}
const Dashboard: React.FC<Props> = ({ user }) => {
  return (
    <Container id="dashboard">
      <Row>
        <Col id="db-header" sm={11}>Welcome back, {user} !</Col>
        <Col>Log out</Col>
      </Row>
      <Row>
        <Col ><CurrentFoster /></Col>
        <Col sm={8}><CalendarApp /></Col>
      </Row>
      <Row>
        <Col><DailyLog /></Col>
        <Col><FormList /></Col>
      </Row>
      <Row>View Past Fosters</Row>
    </Container>
  )
}

export default Dashboard;