import React, { useState } from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';

const Header = () => {
    const[click,setClick]=useState(null)
  return (
    <>
     <header>
        <div className="container flexSB">
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>

            <div className="list flexSB">
                <ul className={click?'sidebar':'flex'}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/pages">Pages</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <div className="shop flexSB">
                  <SearchIcon className='icon'/>
                  <WorkIcon className='icon'/>
                  <GridViewIcon className='icon'/>
                </div>
            </div>
            <button onClick={()=>setClick(!click)}>
                {click ? <i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars"></i>}
            </button>



        </div>
     </header>
    </>
  )
}

export default Header