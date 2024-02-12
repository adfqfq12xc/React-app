import React from 'react'
import './topbar.css'
import {Search,Person,Chat,Notifications} from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function topbar() {
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <span className='logo'>lamasocial</span>
</Link>

      </div>
      <div className="topbarcenter">
        <div className="searbardiv">
        <Search className='searchicon'/>
        <input className='searchHolder' placeholder='Search for friend,post,or video'/>
        </div>


      </div>
      <div className="topbarright">
           <div className="topbarlinks">
               <span className='topbarlink'>HomePage</span>
                 <span className='topbarlink'>TimeLine</span>
             </div>
  <div className="topbaricons">
    <div className="topbariconitem">
<Person/>
<span className="topbaricon">1</span>
</div>
<div className="topbariconitem">
<Chat/>
<span className="topbaricon">2</span>
</div>

<div className="topbariconitem">
<Notifications/>
<span className="topbaricon">1</span>

    </div>
  </div>

      </div>


      <img src="/assets/person/1.jpeg" alt="" className='topbarimg'/>

    </div>
  )
}
