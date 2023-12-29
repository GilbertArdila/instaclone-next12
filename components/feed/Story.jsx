import React from 'react'

const Story = ({user}) => {
  return (
    <>
     <img src={user.image} alt={user.userName} />
     <p>{user.userName}</p>
    </>
  )
}

export default Story;