import React from 'react'
import "./design.css"
import { degital } from '../../../data'

const Design = () => {
  return (
    <>
     <div className="design">
        <div className="container flex">
            <div className="img">
                <img src="./images/2.png" alt="" />
            </div>
            <div className="right">
                <h1>I AM A <br />WEB DESIGNER</h1>
                <div className="social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-google"></i>
                  <i class="fa-brands fa-algolia"></i>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat fuga illo exercitationem illum non nesciunt, soluta ut hic placeat numquam, laborum quisquam</p>
                <button className='vert-btn'>
                    Contact US
                </button>
            </div>
        </div>
     </div>

     <div className="degital">
        <div className="container flexSB">
            {degital.map((val)=>(
                <div className="box flex">
                    <div className="id">
                        <h1>{val.id}</h1>
                    </div>
                    <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default Design