import React from 'react'
import Example from './components/Example'

const Sample = ({ name, age = 20, message }) => {
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
        <p>Welocome to Sample Component : 
        {
            name
        }
        </p>
        <p>
            Age : {age}
        </p>
        <p>
            Message : {message}
        </p>
        
    </div>
    
  )
}


export default Sample