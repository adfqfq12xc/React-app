import React from 'react'
import './online.css'
export default function Online(user) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER ;

  return (
   
    <li className='freind'>
      <div className="profileimgcontainer">
        <img  className="imgr" src={PF+user.profilePicture} alt="" />
        <span className="baronline"></span>
      </div>
      <span className="username">{user.username}</span>
      </li>


  )
}
