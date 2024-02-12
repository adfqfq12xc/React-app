import React from 'react'
import Topbar from '../../Components/topbar/Topbar'
import Sidebar from '../../Components/sidebar/Sidebar' 
import Feed from '../../Components/feed/Feedbar'
import Rightbar from '../../Components/rightbar/Rightbar'
import './profile.css'
import { useState, useEffect } from 'react'; // Add useEffect import
import axios from "axios"
import { useParams } from 'react-router-dom'
export default function Profile() {
  const params =useParams()
  console.log(params)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER ;
  const [user,setuser]=useState([])

  useEffect(()=>{
    const fetchuser= async()=>{
   const res=await axios.get(`/users?username=${params.username}`)
   setuser(res.data)  }
   fetchuser()
 },[])
  return (
    <>
<Topbar/>
<div className='profile'>
   
    <Sidebar/> 
    <div className="profilright">
      <div className="profilrighttop">
        <div className="profilcover">
          
        <img src={ `${PF}${user.coverpicture}`} className='profilecoverimage' alt="" />
        <img src={ `${PF}${user.profilePicture}`} className='profileuserimage' alt="" />
        </div>
        <div className="profileinfo">
          <h4 className='profileinfoname'>{user.username} </h4>
<span className="profileinfodesc">{user.desc}</span>

        </div>
      </div>
      <div className="profilerightnottom">
      <Feed usernamee={user.username} />
          <Rightbar user={user}/>

         </div>
       
    </div>
    </div>

    </>
  )
}
