import React, { useState } from 'react';
import User from './components/User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App : React.FC = () => {
  const [user, setUser] = useState("Kat");
  console.log('app rendered');

  return (
    <Container id="app">
      <p>Foster Tracker</p>
      <User user={user}/>
    </Container>
  );
}


export default App;

