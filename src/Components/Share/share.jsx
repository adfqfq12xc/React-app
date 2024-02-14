import React, { useRef, useState } from 'react'
import { PermMedia,Label,Room,EmojiEmotions } from '@material-ui/icons'
import './share.css'
export default function share() {
    const desc=useRef();
    const {file ,setfile}=useState(null)
    const submithandler=(e)=>{
        e.preventDefault()
        const newpost = {
            userId :user._id,
            desc:desc.current.value,
            img:file
            
        }
        try {
            axios.post("/posts",newpost)
        }catch(err){
            consol.log(err)
        }
    }
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img className='shareprofileimg' src="/assets/person/1.jpeg"  alt="" />
                <input placeholder='what is in your mind Ali'  className='shareinput' />
            </div>
            <hr className="sharehr"/>
            <form className='sharebottom'>
                <div className="shareoptions">
                    <label htmlFor='file' className="shareoption">
                        <PermMedia htmlColor='tomato' className='shareicon'/>
                        <span   className='shareoptionText'>Photo or video</span>
                        <input style={{display:"none"}} type="file" id ="file" accept=".png , .jpeg ,.jpg"
                        onChange={(e)=>setfile(e.target.files[0])}
                        />
                    </label>
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
                </form>
                <button className='sharebutton' onClick={submithandler}
                >share</button>
            </div>
            </div>
  )
}
