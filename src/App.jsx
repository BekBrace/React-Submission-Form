import './App.css';

import INPUT from './components/INPUT';

import { useState } from 'react';


function App() {
  const [username, setUsername] = useState("");
  console.log(username)
  return (
    <div className="app">
      <form action="">
        <INPUT placeholder="username" setUsername ={setUsername}/>
        <INPUT placeholder="email" />
        <INPUT placeholder="password" />
      </form>
    </div>
  );
}

export default App;
