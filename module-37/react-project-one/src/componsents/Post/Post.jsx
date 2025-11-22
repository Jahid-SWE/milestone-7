import React from 'react'

const Post = ({post}) => {
  const {titlle, body}=post;
    console.log(post);
    
  return (
    <div className='mx-auto border-2 p-10 m-5'>
        <h1>name : {titlle}</h1>
        <h1> Body : {body}</h1>
    </div>
  )
}

export default Post