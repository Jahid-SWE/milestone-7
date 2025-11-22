import React, { use } from 'react'

const Friends = ({friendsPromise}) => {
    const friends= use(friendsPromise);
    console.log(friends)
  return (
    <div>
        <h1> friends data : {friends.length}</h1>
    </div>
  )
}

export default Friends