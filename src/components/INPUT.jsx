import React from 'react'
import './INPUT.css'


const INPUT = (props) => {
  const {label, onChange, id, ...entryProps} = props;
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
      <input {...entryProps} onChange={onChange}/>
    </div>
  )
}

export default INPUT