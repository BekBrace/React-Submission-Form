import React from 'react'
import './INPUT.css'


const INPUT = (props) => {
  return (
    <div className='input'>
        {/* <label>Username</label> */}
        <input placeholder={props.placeholder} onChange={e => props.setUsername(e.target.value)} />
    </div>
  )
}

export default INPUT