import React from 'react'

import Navbar from "../components/Navbar.js"
import HeroImg from "../components/HeroImg.js"
import View from "../components/View.js"
import StyleBox from "../components/StyleBox.js"
import Footer from "../components/Footer.js"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <View />
        <StyleBox />
        <Footer />
    </div>
  )
}

export default Home