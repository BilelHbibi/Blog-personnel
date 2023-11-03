import React from 'react'
import "./about.css"
import Tiltle from '../../global/title/Tiltle'

const About = () => {
  return (
    <>
      <div className="about padding">
        <div className="container flex">
            <div className="left">
              <Tiltle title="About Me" subtitle="Who I AM and What I Do" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus veniam sit consequatur illo eligendi nobis tempore dolorum laboriosam ullam doloremque, architecto odit cupiditate neque numquam. Dicta blanditiis nemo est.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex ab numquam ipsam, dolores suscipit, magnam quaerat velit quisquam quae nobis reiciendis fugit consequatur quasi doloremque, aut exercitationem. Impedit, quis.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias libero eveniet, natus possimus sint voluptas quas. Dolorem rerum laboriosam iusto, sunt natus aut blanditiis ab, fugit ex voluptatum nisi.</p>
              <button className="vert-btn">Download CV</button>
            </div>
                <div className="img">
                <img src="./images/1.png" alt="" />
                </div>
        </div>
      </div>
    </>
  )
}

export default About