
import React from 'react'
import {useEffect,useState,useContext} from 'react'
import axios from "axios"
import './feedbar.css'
import Share from '../Share/share'
import Post from '../Post/Post'
import { UserContext } from '../../UserContext'
export default function Feedbar({ usernamee }) {
  const [posts, setPost] = useState([]);
  const{user}=useContext(UserContext)

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const res = usernamee
          ? await axios.get("/posts/profile/"+usernamee)
          : await axios.get("/posts/timeline/"+user._id);
          if (Array.isArray(res.data)) {
            // Apply sorting here before setting the posts state
            const sortedPosts = res.data.sort((s1, s2) => {
              if (s1.createdAt > s2.createdAt) return -1;
              if (s1.createdAt < s2.createdAt) return 1;
              return 0;
            });
  
            setPost(sortedPosts);

}
      else {
        console.log("Error in getting post")
      }
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
