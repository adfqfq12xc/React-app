
import React from 'react'
import {useEffect,useState} from 'react'
import axios from "axios"
import './feedbar.css'
import Share from '../Share/share'
import Post from '../Post/Post'
export default function Feedbar({ usernamee }) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const res = usernamee
          ? await axios.get("/posts/profile/"+usernamee)
          : await axios.get("/posts/timeline/65225e78a6fc29e0438fd573");

        setPost(res.data);
        console.log(res.data)
      } catch (error) {
        // Handle errors here, e.g., display an error message
        console.error("Error fetching posts:", error);
      }
    };
   

    fetchposts();
  }, [usernamee]);

  return (
    <div className='feedbar'> 
     <div className="feedwrapper">

<Share/>
{posts.map((p) => (
  <Post {...p}/>
))
}

</div>
    </div>
  )
}
