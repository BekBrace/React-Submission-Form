import './App.css';

import INPUT from './components/INPUT';

import { useRef, useState } from 'react';


function App() {
  // const [username, setUsername] = useState(""); useState is used to re-render
  // useRef is used, if you don't want to re-render stuff
  const usernameRef = useRef();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef)
    
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* <INPUT placeholder="username" setUsername ={setUsername}/> */}
        <INPUT refer={usernameRef} placeholder="username" />
        <INPUT placeholder="email" />
        <INPUT placeholder="password" />
        <button>*submit*</button>
      </form>
    </div>
  );
}

export default App;
