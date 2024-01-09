import { useEffect, useState } from 'react';
import Story from './Story';
import { dataUser } from '../../../minifaker';
import { useSession } from 'next-auth/react';

const Stories = () => {
  const { data: session } = useSession();
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    dataUser(setStoryUsers, 20)

  }, [])


  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll scrollbar-none rounded-sm ">
      {/**if session, show the user image */}
      {session && (
        <div className='relative group cursor-pointer'>
          <img
            className="storyImage group-hover:scale-110"
            src={session.user.image}
            alt={session.user.name} />
          <p className="truncate text-xs w-14">{session.user.name.split(" ").join("").toLocaleLowerCase()}</p>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 absolute top-3 left-3 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

        </div>
      )}
      
      {storyUsers.map((story) => (
        <Story key={story.id} user={story} />
      ))}
    </div>
  )
}

export default Stories;