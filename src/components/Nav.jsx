import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Nav = () => {
  let ctx = useContext(UserContext)
      console.log(ctx)
  return (
    <div>
      <nav className='bg-black text-white h-[70px] text-xl flex items-center justify-around fixed top-0 right-0 left-0 z-20'>
        <h1 className='font-extrabold text-2xl'>Ecom Express</h1>
        <Link to="/">Home</Link>
        <div><Link to="/cart">Cart</Link>
        <sup className='text-white'>
          0
          </sup>
          </div>
        <div className='flex gap-15'>
        <Link to="/login" className='border-2 border-white rounded-md px-4'>Login</Link>
        <Link to="/signup" className='border-2 border-white rounded-md px-4'>Signup</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
