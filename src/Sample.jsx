import React from 'react'
import Example from './components/Example'
import ListItems from './components/ListItems'

const Sample = ({ person , handileClick , arr}) => {
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
        </div>
        
    </div>
    
  )
}


export default Sample