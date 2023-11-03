import React from 'react'
import "./title.css"

const Tiltle = ({title,subtitle}) => {
  return (
    <>
     <div className="global">
        <div className="title">
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
        </div>
     </div>
    </>
  )
}

export default Tiltle