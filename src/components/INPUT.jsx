import React, { useState } from 'react';
import './INPUT.css';


const INPUT = (props) => {
  const [focus, setFocus] = useState(false);
  const {label, onChange, id,error, ...entryProps} = props;
  const handleFocus = (e) => {
    setFocus(true);
  };

  return (
    <div className='input'>
        {/* <label>Username</label> */}
        {/* <input placeholder={props.placeholder} onChange={e => props.setUsername(e.target.value)} /> */}
        {/* <input 
        ref={props.refer}
        placeholder={props.placeholder}/> */}
         {/* <input 
        name={props.name}
        placeholder={props.placeholder}/> */}
      <label>{label}</label>
      <input {...entryProps} onChange={onChange} onBlur={handleFocus} focus={focus.toString()} onFocus={() => entryProps.name === "confirmPassword" && setFocus(true)}/>
      {/* react_devtools_backend.js:4026 Warning: Received `true` for a non-boolean attribute `focus`.
      If you want to write it to the DOM, pass a string instead: focus="true" or focus={value.toString()}. */}
      <span>{error}</span>
    </div>
  )
}

export default INPUT