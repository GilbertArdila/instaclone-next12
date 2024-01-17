import { useEffect, useState } from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";


import { db } from "../../../firebase";
import Comment from "./Comment";

const Comments = ({id}) => {
    const [postComments, setPostComments] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "posts",id,"comments"),orderBy(("timestamp"), "desc")), (snapshot)=>{
            setPostComments(snapshot.docs)
            }
          )
          return unsubscribe;
    
      
    }, [db])
 
  return (
    <div>
        {postComments.length >0 && (
            <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                {postComments.map((postComment) =>(
                    <Comment postComment={postComment}/>
                ))}
            </div>
        )}
    </div>
  )
}

export default Comments;