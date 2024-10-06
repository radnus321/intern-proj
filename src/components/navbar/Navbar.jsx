import React from 'react'
import './navbar.css'
const Navbar = ({heading}) => {
    return (
    <>
        <div className='navbar'>{heading}</div>
    </>
  )
}

export default Navbar