import React, { useState } from 'react';
import User from './components/User';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const App : React.FC = () => {
  // const [user, setUser] = useState("Kat");
  const user = "Kat"

  return (
    <Container id="app">
      <Navbar>
        <Container>
          <Navbar.Brand>Welcome Back {user}!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Logout
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <User user={user}/>
    </Container>
  );
}


export default App;

