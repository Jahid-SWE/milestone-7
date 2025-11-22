import React, { useState } from 'react'

const ShowHide = () => {
    const [show, setShow] =useState(true);
  return (
    <div>
        <button onClick={()=>setShow(!show)} className='bg-green-500 text-white px-4 py-2 rounded m-5'>
            {show ? 'Hide Component' : 'Show Component'}
        </button>
        {
            show && <h1 className='text-center text-3xl'>Hellow, React Learner!</h1>
        }

    </div>
  )
}

export default ShowHide