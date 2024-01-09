import UserProfileImage from "../../UserProfileImage";
import { useSession, signOut } from "next-auth/react";
const MiniProfile = () => {
  const {data: session} = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-5 mr-5">
        <UserProfileImage styles={"w-16 h-16 rounded-full object-cover border p-[2px] cursor-pointer"}/>
        <div className="flex flex-col justify-center flex-1 ml-4 mr-4">
            <h2 className="font-bold">{session?.user.name.split(" ").join("").toLocaleLowerCase()}</h2>
            <h3 className="text-sm text-gray-400">Welcome back</h3>
        </div>
        <button className="btn text-sm" onClick={()=> signOut()}>Sign out</button>
    </div>
  )
}

export default MiniProfile;