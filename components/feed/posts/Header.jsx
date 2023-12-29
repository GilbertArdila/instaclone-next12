import UserProfileImage from "../../UserProfileImage";

const Header = ({post}) => {
  return (
    <div className="flex space-x-2 items-center p-2">
      <UserProfileImage styles={"w-10 h-10 rounded-full p-1"}/>

      <h3 className="font-bold flex-1">{post.userName}</h3>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>



    </div>
  )
}

export default Header;