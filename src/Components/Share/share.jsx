import React from 'react'
import { PermMedia,Label,Room,EmojiEmotions } from '@material-ui/icons'
import './share.css'
export default function share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img className='shareprofileimg' src="/assets/person/1.jpeg"  alt="" />
                <input placeholder='what is in your mind Ali'  className='shareinput' />
            </div>
            <hr className="sharehr"/>
            <div className='sharebottom'>
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMedia htmlColor='tomato' className='shareicon'/>
                        <span   className='shareoptionText'>Photo or video</span>
                    </div>
                    <div className="shareoption">
                        <Label htmlColor='blue' className='shareicon'/>
                        <span   className='shareoptionText'>Tag</span>
                    </div>
                    <div className="shareoption">
                        <Room htmlColor='green' className='shareicon'/>
                        <span   className='shareoptionText'>Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions htmlColor='goldenroc' className='shareicon'/>
                        <span   className='shareoptionText'>Feelings</span>
                    </div>
                </div>
                <button className='sharebutton'>share</button>
            </div>
            </div>
        </div>
  )
}
