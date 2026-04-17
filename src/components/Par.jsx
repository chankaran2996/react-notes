import React, { useState } from 'react'
// import Chil from './Chil'

const Par = () => {
    const [name , setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }
    console.log("name from Par Component:", name)

  return (
    <div>
        <input 
        type="text" 
        placeholder='Enter Your Name'
        className=' border-2 border-gray-300 rounded px-4 py-2'
        onChange={handleChange}
        />
        <p>
            Welocome to Par Component : {name}
        </p>
        {/* <Chil /> */}
    </div>
  )
}

export default Par