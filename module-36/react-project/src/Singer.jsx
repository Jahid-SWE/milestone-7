import React from 'react'

const Singer = ({singer}) => {
    const {name, age}=singer
  return (
    <div>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        
    </div>
  )
}

export default Singer