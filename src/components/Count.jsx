import React, { useState } from 'react'

const Count = () => {

    const [count , setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <p className=' text-2xl font-bold text-red-800'>Count : {count}</p>
        <button 
        className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={increment}
        >
            Increment
        </button>
        <button 
        className='bg-red-500 text-white px-4 py-2 rounded ml-2'
        onClick={decrement}
        >
            Decrement
        </button>
    </div>
  )
}

export default Count