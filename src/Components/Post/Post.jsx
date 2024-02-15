import './post.css'
import { useState, useEffect } from 'react'; // Add useEffect import
import axios from "axios"
import { MoreVert } from '@material-ui/icons'
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { UserContext } from '../../UserContext';
export default function Post( post) {

    const[like,setlike]= useState(post.likes.length)
    const[isliked,islikedd]= useState(false)
const PF=process.env.REACT_APP_PUBLIC_FOLDER ;

const likehandler = ()=>{
    setlike(isliked? like-1 :like+1)
    islikedd(!isliked)
}
    const [user,setuser]=useState([])
   

    useEffect(()=>{
      const fetchuser= async()=>{
     const res=await axios.get(`/posts/i/${post.userid}`)
     setuser(res.data) 
    console.log(res) }
     fetchuser()
   },[post.userid])


    return (

    <div className='post'>
        <div className='postwrapper'>
            <div className="posttop">

                <div className="posttopleft">
                    <Link to={`profile/${user.username}`}>
                        
                        <img className='postprofileimg' src={PF+user.profilePicture || PF + "heart.png"} alt="" />
                  </Link>
                  <span className="postusername">{user.username }</span>
                  <span className="postusername">{format(post.createdAt)}</span>

                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>

            </div>
            <div className="postcenter">
                <span className="posttex"> {post?.desc} </span>
                <img className="postimg " src={PF+post.img || PF+"heart.png"} alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    
                    <img src={`${PF}like.png`} className='likepng' onClick={likehandler} alt="" />
                    <img src={`${PF}heart.png`}  className='likepng' onClick={likehandler} alt="" />
                    <span className="counter">{like} PEOPLE LIKE IT</span>
                </div>
                <div className="postbottomright">
                    <span className="commenttext">{post.comment}comments</span>
                </div>


            </div>
        </div>
        

    </div>
  )
}
