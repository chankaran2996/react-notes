import React, { useState } from 'react'
import Example from './components/Example'
import ListItems from './components/ListItems'
import Par from './components/Par'

const Sample = () => {
    const [name , setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }
    console.log("name from Sample Component:", name)
  return (
    <div 
    className=' text-2xl text-red-800 font-bold'
    >
        {/* <p>
            Sample Component
        </p>
        <p>
            Sample Name
        </p>
        <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                Click Me
            </button>
        </div> */}
        {/* <p>Welocome to Sample Component : 
        {
            person.name
        }
        </p>
        <p>
            Age : {person.age}
        </p>
        <p>
            Message : {person.message}
        </p>

        <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={handileClick}
        >
            Click Me
        </button>

        <div>
            <ul>
                {
                    arr.map((item,index) => (
                        <ListItems item={item} i={index} />
                    ))
                }
            </ul>
        </div> */}

        
        <input 
        type="text" 
        placeholder='Enter Your Name'
        className=' border-2 border-gray-300 rounded px-4 py-2'
        onChange={handleChange}
        />
        <p>
            Welocome to Sample Component : {name}
        </p>
        <Par />
    </div>
    
  )
}


export default Sample