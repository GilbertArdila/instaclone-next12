import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../../../firebase.js";
import {useSession} from "next-auth/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../../../atom/globalStates.js";


const InputBox = ({id}) => {
    const {data: session} = useSession();
    const [comment, setComment] = useState("");
    const [isOpen, setIsOpen] = useRecoilState(commentState);
   

    async function sendComment(event){
       event.preventDefault();
       const newComment = comment;
       setComment("");
       await addDoc(collection(db, "posts", id, "comments"),{
        comment: newComment,
        userName: session.user.username,
        userImage: session.user.image,
        timestamp:serverTimestamp()
       })
       setIsOpen(false);
    }
    return (
        <form className="flex items-center justify-between p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="headerMenu">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>

            <input
            value={comment}
            onChange={(event)=> setComment(event.target.value) }
            className="flex-1 border-none focus:ring-0"
            type="text"
            placeholder="Enter your comment..." />

            <button 
            disabled={!comment.trim()}
            onClick={sendComment}
            className={`disabled:text-blue-200 ${comment.trim() && "btn"}  `}>Post</button>
        </form>
    )
}

export default InputBox;