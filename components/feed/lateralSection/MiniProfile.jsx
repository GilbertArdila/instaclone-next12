import UserProfileImage from "../../UserProfileImage";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <UserProfileImage styles={"w-16 h-16 rounded-full object-cover border p-[2px]"}/>
        <div className="flex flex-col justify-center flex-1 ml-4">
            <h2 className="font-bold">sea lover</h2>
            <h3 className="text-sm text-gray-400">Welcome to InstaClone</h3>
        </div>
        <button className="text-blue-400 font-semibold text-sm">Sign out</button>
    </div>
  )
}

export default MiniProfile;