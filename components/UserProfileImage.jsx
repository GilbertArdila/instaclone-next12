import { useSession,  signOut } from "next-auth/react";

const UserProfileImage = ({styles}) => {
  const {data: session} = useSession();
  return (
    <img 
    className={`${styles}`}
    src={session?.user.image} 
    alt={session?.user.name}
    onClick={()=>signOut()}
    />
  )
}

export default UserProfileImage;