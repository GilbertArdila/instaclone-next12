import {useSession} from "next-auth/react";

import Buttons from "./Buttons";
import InputBox from "./InputBox";



const Post = ({ post }) => {
  const {data: session} = useSession();
 
  return (
    <div className="bg-white my-7 border rounded-md ">
      {/**Post header */}
      <div className="flex items-center p-5">

        <img
          className="w-12 h-12 rounded-full object-cover border p-1 mr-3"
          src={post.data().profileImage}
          alt={post.data().userName} />

        <h3 className="font-bold flex-1">{post.data().userName}</h3>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>



      </div>
      {/**Post image */}
      <img className="object-cover w-full max-w-[465px] mx-auto" src={post.data().image} alt={post.data().userName} />
      {/**Post buttons */}
      {session && <Buttons />}
      
      {/**Post comments */}
      <p className="p-5 truncate"><span className="font-bold mr-2">{post.userName}</span>{post.data().caption}</p>
      {/**Post input box */}
      {session && <InputBox />}
      

    </div>
  )
}

export default Post;