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
    label:"Username",
    error: "error! username should be 3-16 characters and no special characters.",
    required: true,
    pattern: "^[A-Za-z0-9]{3,16}$" // regex for determining 3 to 16 letters 
  },
  {
    id:2,
    name:"email",
    // type:"text",
    type: "email",
    placeholder:"enter your email",
    label:"E-Mail",
    error: "error! please enter a valid email.",
    required: true,
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"enter your birth date",
    label:"Birthday",
    required: true,
  },
  {
    id:4,
    name:"password",
    type:"text",
    placeholder:"enter your password",
    label:"Password",
    error: "error! password should be 8-15 characcters and include at least a special character.",
    pattern:`^(?=.[0-9](?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$`,
    required: true,
  },
  {
    id:5,
    name:"confirmPassword",
    type:"text",
    placeholder:"Confirm your pswd",
    label:"Confirm",
    error: "error! password do not match. please try again.",
    required: true,
    pattern: values.password,
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
