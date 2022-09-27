import React from "react";
import Calendar from "./dashboard-sub/Calendar";
import CurrentFoster from "./dashboard-sub/CurrentFoster";
import DailyLog from "./dashboard-sub/DailyLog";
import FormList from "./dashboard-sub/FormList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  user: string;
}
const Dashboard: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col id="db-header" sm={8}>Welcome back, {user} !</Col>
        <Col sm={2}>Log out</Col>
      </Row>
      <Row>
        <Col sm={4}><CurrentFoster /></Col>
        <Col sm={6}><Calendar /></Col>
      </Row>
      <Row>
        <Col sm={5}><DailyLog /></Col>
        <Col sm={5}><FormList /></Col>
      </Row>
      <Row>View Past Fosters</Row>
    </Container>
  )
}

export default Dashboard;