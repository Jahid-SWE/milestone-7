
import React, { use } from 'react'

const UsersApi = ({usersPromise}) => {
    const users= use(usersPromise)
    console.log(users)
    
  return (
    <div>
        <h1> Total User in here : {users.length}</h1>
       {
        users.map(user=><li key={user.id}> Name : {user.name} , Company : {user.company.name} , City : {user.address.city} </li>)
       }

    </div>
  )
}

export default UsersApi