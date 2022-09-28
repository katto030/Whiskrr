import React from 'react';
import User from './components/User';
import Container from 'react-bootstrap/Container';


const App : React.FC = () => {
  // const [user, setUser] = useState("Kat");
  const user = "Kat"

  return (
    <Container id="app">
      <User user={user}/>
    </Container>
  );
}


export default App;

