import React, { useContext, useRef, useState } from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import './share.css';
import axios from 'axios'; // Import axios library
import { UserContext } from '../../UserContext';
import {Link} from "react-router-dom"

export default function Share() {
    const desc = useRef();
    const user = useContext(UserContext); // Destructure useContext
    
    const [file, setFile] = useState(null); // Correct useState usage
    const submithandler = async (e) => {
        e.preventDefault();
        const newpost = {
            userid: user.user._id,
            desc: desc.current.value,
            img: file? file : ''
        };
        try {
            await axios.post("/posts/", newpost);
        } catch (err) {
            console.log(err); // Corrected console.log syntax
        }
    };

    return (
        <div className='share'>
            <div className="sharewrapper">
                <div className="sharetop">
                    <img className='shareprofileimg' src="/assets/person/1.jpeg" alt="" />
                    <input ref={desc} placeholder={'What is in your mind, ' + user.user.username + '?'} className='shareinput' />
                </div>
                <hr className="sharehr" />
                <form className='sharebottom'>
                    <div className="shareoptions">
                        <label htmlFor='file' className="shareoption">
                            <PermMedia htmlColor='tomato' className='shareicon' />
                            <span className='shareoptionText'>Photo or video</span>
                            <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareoption">
                            <Label htmlColor='blue' className='shareicon' />
                            <span className='shareoptionText'>Tag</span>
                        </div>
                        <div className="shareoption">
                            <Room htmlColor='green' className='shareicon' />
                            <span className='shareoptionText'>Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotions htmlColor='goldenroc' className='shareicon' />
                            <span className='shareoptionText'>Feelings</span>
                        </div>
                    </div>
                </form>
                <button className='sharebutton' onClick={submithandler}>Share</button>
            </div>
        </div>
    );
}
