import React from 'react'
import "./blog.css"
import Tiltle from '../../global/title/Tiltle'
import { blog } from '../../../data'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const Blog = () => {
  return (
    <>
      <div className="blog padding">
        <Tiltle title="LATEST BLOG" subtitle="Read Inspirational Story Every Week" />
        <div className="container">
            <div className="grid3">
                {blog.map((val)=>(
                    <>
                     <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <span>{val.date}</span>
                            <h2>{val.title}</h2>
                            <div>
                            <button className="more-btn">Read More</button>
                            <DoubleArrowIcon className='icon'/>
                            </div>
                            
                        </div>
                     </div>
                    </>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog