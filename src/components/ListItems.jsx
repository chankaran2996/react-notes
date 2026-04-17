import React from 'react'

const ListItems = ({ item , i }) => {
  return (
    <li className=' text-2xl' key={i}>{item}</li>
  )
}

export default ListItems