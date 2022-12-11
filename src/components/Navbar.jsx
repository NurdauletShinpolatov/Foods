import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { basket } = useSelector(state => state.products)
  return (
    <div className='w-full px-24 py-4 shadow-md flex justify-between'>
        <Link to={"/"}><h2 className='text-xl'>Foods</h2></Link>
        <Link to={"/basket"}>
          <button className='relative cursor-pointer bg-gray-200 px-2 py-1 rounded-md text-gray-90 text-xl active:opacity-70'>
              <span className='absolute px-1 py-0 bg-blue-500 text-xs text-white rounded-full -top-1 -right-1'>{basket?.length}</span>
              <box-icon name='basket'></box-icon>    
          </button>
        </Link>
    </div>
  )
}

export default Navbar