import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


import { db } from "../../../firebase.js";
import Post from "./Post";


const Posts = () => {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    /**to get the posts from firebase */
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy(("timestamp"), "desc")), (snapshot) => {
        setPosts(snapshot.docs)

      }
    )

    return unsubscribe;
    /**we add this dependency to avoid requests every second to data base */
  }, [db]);




  return (
    <div>
      {posts?.map((post) => (
        
          <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts;