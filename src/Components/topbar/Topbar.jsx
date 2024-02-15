import React, { useContext } from 'react'
import './topbar.css'
import {Search,Person,Chat,Notifications} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
const PF=process.env.REACT_APP_PUBLIC_FOLDER ;

export default function topbar() {
  const user = useContext(UserContext);

  // Check if user is not available yet or is null
  if (!user) {
    console.log("user null")
    return null; // You might want to render something else or handle this case differently
  } 
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


      <img src={user.profilePicture ? PF + user.profilePicture : `${PF}/person/2.jpeg`} alt="Profile" className='topbarimg'/>

    </div>
  )
}
