import React, { useState } from 'react';
import User from './components/user/User';

const App : React.FC = () => {
  const [user, setUser] = useState("Kat");
  return (
    <div className="App">
      <p>Foster Tracker</p>
      <User user={user}/>
    </div>
  );
}


export default App;

