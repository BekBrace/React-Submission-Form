import './App.css';

import INPUT from './components/INPUT';

import { useRef, useState } from 'react';

// import pic from '../src/assets/pic.jpg';

function App() {
  // useState is used to re-render
  // const [username, setUsername] = useState(""); 
  // useRef is used, if you don't want to re-render stuff
  // const usernameRef = useRef();

  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
  
const entries = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"enter your username",
    label:"Username"
  },
  {
    id:2,
    name:"email",
    type:"text",
    placeholder:"enter your email",
    label:"E-Mail"
  },
  {
    id:3,
    name:"password",
    type:"text",
    placeholder:"enter your password",
    label:"Password"
  },
  {
    id:4,
    name:"confirmPassword",
    type:"text",
    placeholder:"Confirm your pswd",
    label:"Confirm"
  }
]

  // handleSubmit method to refresh the page  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef)
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
  }

  // updating values entered by user in the form
  //create onChange method for handling changes
  //and set your values using setValues created above
  //and then unpack the previous values, and for each target name
  //you update them by vale :e.target.value
  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value});
  }
  console.log(values)
  return (
    <div className="app"> 
      <form onSubmit={handleSubmit}>
        {/* <INPUT placeholder="username" setUsername ={setUsername}/> */}
        {/* <INPUT refer={usernameRef} placeholder="username" /> */}
        {/* <INPUT name= "username" placeholder="username" />
        <INPUT name= "email" placeholder="email" />
        <INPUT name= "password" placeholder="password" /> */}
        <h1>Apply Now!</h1>
        {entries.map((entry) => (
          <INPUT key={entry.id} {...entry} 
            value={values[entry.name]} 
            onChange={onChange}/>
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
