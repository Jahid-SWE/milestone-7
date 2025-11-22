import React from 'react'

const Calculation = () => {
    const [count, setCount] = React.useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleSub = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
  return (
    <div className='mx-auto justify-center p-5 m-5 border-2'>
        <h1>Current Value : {count}</h1>
        <button onClick={handleAdd} className='bg-blue-500 text-white px-4 py-2 rounded'>Add</button>
        <button onClick={handleSub} className='bg-blue-500 text-white px-4 py-2 rounded'>Sub</button>
        <button onClick={handleReset} className='bg-blue-500 text-white px-4 py-2 rounded'>Reset</button>
    </div>
  )
}

export default Calculation