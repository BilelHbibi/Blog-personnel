import React from 'react'
import { useLocation } from 'react-router-dom'
import "./name.css"

const Name = () => {
    const location=useLocation()
  return (
    <div className='name'> 
        <h3>{location.pathname.split("/")[1]}</h3>
    </div>
  )
}

export default Name