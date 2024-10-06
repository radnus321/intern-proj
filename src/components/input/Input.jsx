import React from 'react'
import { useState } from 'react'
import './input.css'
const Input = (messages) => {
    const handleSubmit = () => {
        
    }
  return (
    <>  
        <form action={handleSubmit  }>
            <input type="text" className='input-field'/>
            <input type="submit"/>
        </form>
    </>
  )
}

export default Input