import React, { use } from 'react'
import Post from '../Post/Post'

const Posts = ({postsPromise}) => {
     const posts= use(postsPromise)
     console.log(posts)
  return (
    <div className=''>
        <h1>Posts {posts.length} </h1>
        {
           posts.map(post=><Post key={post.id} post={post}></Post>)
        }
    </div>
  )
}

export default Posts