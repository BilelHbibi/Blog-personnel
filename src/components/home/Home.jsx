import React from 'react'
import "./home.css"
import Design from './designer/Design'
import About from './about/About'
import Service from './service/Service'
import Skills from './skills/Skills'
import Work from './work/Work'
import Blog from './blog/Blog'

const Home = () => {
  return (
    <>
      <Design />
      <About />
      <Service />
      <Skills />
      <Work />
      <Blog />
    </>
  )
}

export default Home