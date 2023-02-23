import React from 'react'
import "./MailList.css"
function MailList() {
  return (
    <div>
      <div className="mail">
        <div className="mailTitle">
           <h3>Save Time And Money!</h3> 
        </div>
        <span className='mailDesc'> Sing Up And I Will Send You Best Deals</span>
        <div className="mailInputContainer">
            <input type="text " placeholder='Your Mail ' />
            <button className='btn btn-outline-primary btn-sm ms-2'>subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList
