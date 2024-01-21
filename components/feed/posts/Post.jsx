import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { commentState, postModalState, postId } from "../../../atom/globalStates.js";
import Buttons from "./Buttons";
import InputBox from "./InputBox";
import Comments from "./Comments";


const Post = ({ post }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(commentState);
  const [openPostModal, setOpenPostModal] = useRecoilState(postModalState);
  const [newPostId, setNewPostId] = useRecoilState(postId);
  

  return (
    <div className="bg-white my-7 border rounded-md ">
      {/**Post header */}
      <div className="flex items-center p-5">

        <img
          className="w-12 h-12 rounded-full object-cover border p-1 mr-3"
          src={post.data().profileImage}
          alt={post.data().username} />

        <h3 className="font-bold flex-1">{post.data().userName}</h3>
        {post.data().id === session.user.uid && <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => {
            setOpenPostModal(true);
            setNewPostId(post.id);
            
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>}
        





      </div>
      {/**Post image */}
      <img className="object-cover w-full max-w-[465px] mx-auto" src={post.data().image} alt={post.data().username} />
      {/**Post buttons */}
      {session && <Buttons id={post.id} />}

      {/**Post caption */}
      <p className="p-5 truncate"><span className="font-bold mr-2">{post.userName}</span>{post.data().caption}</p>
      {/**Post comments */}
      <Comments id={post.id} />


      {/**Post input box */}
      {session && isOpen && <InputBox id={post.id} />}



    </div>
  )
}

export default Post;