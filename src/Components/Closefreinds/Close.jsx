import React from 'react'
import './close.css'
export default function Close(post) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER ;

  return (
    <ul className='sidebarfreindList'>
 <li className="sidebarfreind">
<img className='sidebarfreindimg' src={PF+post.profilePicture} alt="" />
<span className='sidebarfreindName'>{post.username}</span>  
  </li>
  </ul>
  )
}
