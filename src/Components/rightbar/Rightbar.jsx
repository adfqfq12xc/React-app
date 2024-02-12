import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import {Users} from '../../Pages/dummyData.js'

export default function rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER ;

 const Homerighbar=()=>{
  return(
    <>
         <div className="birthdaycontainer">
        <img className='birthdayimg' src="assets/gift.png" alt="" />
        <span className='birthdaytext'><b>Ali Kansoun</b> and <b>3 others </b>have birthday today</span>

      </div>
      <img src="assets/ad.png" className='adpng' alt="" />
      <h4 className='Title'>Online Freinds </h4>

 <ul className='freindlist'>
{Users.map(u => (
  <Online {...u}/>
  ))}
  </ul>
    </>
  )
 }
 const Profilerightbar = () => {
return(
<>
<h4 className='rightbartitle'>
User information 
</h4>
<div className="rightbarinfo">
  <div className="rightbarinfoitem">
    <span className="rightbarinfokey">city</span>
    <span className="rightbarinfoValue">{user.city}</span>

  </div>
  </div>
  
<div className="rightbarinfo">
  <div className="rightbarinfoitem">
    <span className="rightbarinfokey">From</span>
    <span className="rightbarinfoValue">{user.from}</span>

  </div>
  </div>
<div className="rightbarinfo">
  <div className="rightbarinfoitem">
    <span className="rightbarinfokey">Relationship</span>
    <span className="rightbarinfoValue">{user.reliationship}</span>

  </div>
</div>
<h4>
User Freinds 
</h4>
<div className="rightbarfollowings">

  <div className="rightbarfollowing">
    <img src={`${PF}person/1.jpeg `} alt=""  className='imgfollowing'/>
    <span className="rightbarfollowing">Jhon carter</span>
  </div>
  <div className="rightbarfollowing">
    <img src={`${PF}person/2.jpeg `} alt=""  className='imgfollowing'/>
    <span className="rightbarfollowing">Jhon carter</span>
  </div>
  <div className="rightbarfollowing">
    <img src={`${PF}person/3.jpeg `} alt=""  className='imgfollowing'/>
    <span className="rightbarfollowing">Jhon carter</span>
  </div>
  <div className="rightbarfollowing">
    <img src={`${PF}person/4.jpeg `} alt=""  className='imgfollowing'/>
    <span className="rightbarfollowing">Jhon carter</span>
  </div>
  <div className="rightbarfollowing">
    <img src={`${PF}person/5.jpeg `} alt=""  className='imgfollowing'/>
    <span className="rightbarfollowing">Jhon carter</span>
  </div>
  <div className="rightbarfollowing">
    <img src={`${PF}person/6.jpeg `} alt=""  className='imgfollowing'/>
    <span className="rightbarfollowing">Jhon carter</span>
  </div>
</div>

</>
)

 }
  return (
    <div className='rightbar'>
      <div className="rightbarapper">
      {user? <Profilerightbar/>:  <Homerighbar/>}
 
      </div>
    </div>
  )
}
