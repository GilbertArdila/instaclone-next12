import Buttons from "./Buttons";
import InputBox from "./InputBox";
import Header from "./header";


const Post = ({post}) => {
  return (
    <div className="bg-white my-7 border rounded-md ">
      {/**Post header */}
        <Header post={post}/>
        {/**Post image */}
        <img className="object-cover w-full" src={post.image} alt={post.userName} />
        {/**Post buttons */}
        <Buttons/>
        {/**Post comments */}
        <p className="p-5 truncate"><span className="font-bold mr-2">{post.userName}</span>{post.caption}</p>
        {/**Post input box */}
        <InputBox/>
        
    </div>
  )
}

export default Post;