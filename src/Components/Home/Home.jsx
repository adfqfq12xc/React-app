import React from 'react'
import Topbar from '../topbar/Topbar'
import Feed from '../feed/Feedbar'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'

import './home.css'
export default function() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    
       <Sidebar/>
       <Feed/>
       <Rightbar/> 
    </div>
    </div>
  )
}
