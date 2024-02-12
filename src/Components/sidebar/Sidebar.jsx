import React from 'react'
import './sidebar.css'
import {Users} from '../../Pages/dummyData.js'
import Close from  "../Closefreinds/Close"
import  {RssFeed,PlayCircleOutlineOutlined
,Group,Bookmark,WorkOutline,School,Event
} from '@material-ui/icons'
export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <ul className='sidebarlist'>

<li className='sidebarlistitem'><RssFeed/>
<span className='sidebarlistitemtext'>text</span>
</li>
<li className='sidebarlistitem'><PlayCircleOutlineOutlined/>
<span className='sidebarlistitemtext'>videos</span>
</li>
<li className='sidebarlistitem'><Group/>
<span className='sidebarlistitemtext'>Group</span>
</li>
<li className='sidebarlistitem'><Bookmark/>
<span className='sidebarlistitemtext'>Bookmark</span>
</li>

<li className='sidebarlistitem'><WorkOutline/>
<span className='sidebarlistitemtext'>Jobs</span>
</li>
<li className='sidebarlistitem'><Event/>
<span className='sidebarlistitemtext'>Event</span>
</li>
<li className='sidebarlistitem'><School/>
<span className='sidebarlistitemtext'>School</span>
</li>
            </ul>
            <button className='sidebarbutton'>Show more</button>
            <hr className='sidebarhr'/>
         
            
                  {Users.map(p=>(
                    <Close {...p}/>
                  ))}


       


        </div>
     


    </div>
  )
}
