import React from "react";
import Home from "./routes/Home.js"
import LoginSignup from './sign in/LoginSignup.js'

import Buy from './components/view_homes/buy.js'
import Rent from './components/view_homes/rent.js'
import Vh1 from './components/view_homes/vh1.js'
import Vh2 from './components/view_homes/vh2.js'
import Vh3 from './components/view_homes/vh3.js'
import Vh4 from './components/view_homes/vh4.js'
import Vh5 from './components/view_homes/vh5.js'
import Vh6 from './components/view_homes/vh6.js'
import Vh7 from './components/view_homes/vh7.js'
import Vh8 from './components/view_homes/vh8.js'

import "./index.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="LoginSignup" element={<LoginSignup /> }/>

        <Route path="/buy.js" element={<Buy /> }/>
        <Route path="/rent.js" element={<Rent /> }/>
        <Route path="/vh1.js" element={<Vh1 /> }/>
        <Route path="/vh2.js" element={<Vh2 /> }/>
        <Route path="/vh3.js" element={<Vh3 /> }/>
        <Route path="/vh4.js" element={<Vh4 /> }/>
        <Route path="/vh5.js" element={<Vh5 /> }/>
        <Route path="/vh6.js" element={<Vh6 /> }/>
        <Route path="/vh7.js" element={<Vh7 /> }/>
        <Route path="/vh8.js" element={<Vh8 /> }/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
