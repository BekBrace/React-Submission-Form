import React from 'react'
import './INPUT.css'


const INPUT = (props) => {
  return (
    <div className='input'>
        {/* <label>Username</label> */}
        {/* <input placeholder={props.placeholder} onChange={e => props.setUsername(e.target.value)} /> */}
        <input 
        ref={props.refer}
        placeholder={props.placeholder}/>
    </div>
  )
}

export default INPUT