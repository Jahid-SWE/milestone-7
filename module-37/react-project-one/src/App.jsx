
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Users from './componsents/Users/Users'
import Counter from './Counter'
import Friends from './componsents/Friends/Friends'
import Posts from './componsents/Posts/Posts'
import Calculation from './componsents/Calculation/Calculation'
import ShowHide from './componsents/ShowHide/ShowHide'
import UsersApi from './componsents/UsersApi/UsersApi'
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFreiends = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }

// const fetchPosts= async()=>{
//   const res= await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json()
// }

 const fetchusersPromise= async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}


function App() {
const usersPromise= fetchusersPromise();
//  const postsPromise = fetchPosts()
// const friendsPromise = fetchFreiends();

  // const handleClick = () => {
  //   alert('this is clic-1')
  // }

  // const handleClick2 = () => {
  //   alert('Click Me-3')
  // }

  // const handleClick3 = (num) => {
  //   const newNum = num + 5;
  //   alert('youare naoe' + ' ' + newNum)
  // }
  return (
    <>
    <Suspense fallback={ <h1>Very importent loading part users ....</h1>}>
    <UsersApi usersPromise={usersPromise}></UsersApi>

    </Suspense>
    
    {/* <ShowHide></ShowHide>
      <Calculation className='bg-amber-100'></Calculation>
    <Suspense fallback={<h1>All Post Comming Soon.....</h1>} >
    <Posts postsPromise={postsPromise}></Posts>
    </Suspense> */}

      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <Users fetchUsers={fetchUsers}></Users>

      </Suspense> */}

        {/* <Suspense fallback={<h1>Loding Friends </h1>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense> */}
      {/* <Batsman></Batsman> */}
      {/* <Counter></Counter>
      <h1>Welcome to React Project</h1>
      <button onClick={handleClick}>Clic Me-1</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={()=>handleClick3(56)}>Click Me-2</button> */}
  
    </>
  )
}

export default App
