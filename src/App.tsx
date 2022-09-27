import React, { useState } from 'react';
import User from './components/user/User';

const App : React.FC = () => {
  const [user, setUser] = useState("Kat");
  console.log('app rendered');

  return (
    <div className="App container">
      <p>Foster Tracker</p>
      <User user={user}/>
    </div>
  );
}


export default App;

