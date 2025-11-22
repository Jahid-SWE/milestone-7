import { use } from 'react'

const Users = ({fetchUsers}) => {
  const users=use(fetchUsers)
  console.log(users)
  return (
    <div>
        <h1> Data size : {users.length}</h1>
    </div>
  )
}

export default Users