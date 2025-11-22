import  { useState } from 'react'
const styleCounter={
    border: '1px solid red',
    padding:'20px'
}
const Counter = () => {
    const [count, setCount]= useState(0)
    const handleCount=()=>{
        const newCount= count+1;
        setCount(newCount)
    }
  return (
    <div style={styleCounter}>
        <h4>Counter : {count} </h4>
        <button onClick={handleCount}>Add</button>

    </div>
  )
}

export default Counter