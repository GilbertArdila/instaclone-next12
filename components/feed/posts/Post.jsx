import Buttons from "./Buttons";
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
        {/**Post caption */}
        
    </div>
  )
}

export default Post;