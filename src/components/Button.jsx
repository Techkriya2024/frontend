import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,LinkedTo}) => {
  return (
    <Link to={LinkedTo}>
        <div className='bg-white font-poppins text-black  md:w-full mx-auto text-base md:text-xl text-center px-16 py-1 hover:py-3 transition-all duration-200 rounded-lg font-bold '>
            {children}
        </div>
    </Link>
  )
}

export default Button