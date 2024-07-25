import "../components/StyleBox.css"
import Buyhome from "../assets/buyhome.png"
import Renthome from "../assets/renthome.png"
import Sellhome from "../assets/sellhome.png"
import { useNavigate}  from "react-router-dom";

import React from 'react'

const StyleBox = () => {

  const navigate = useNavigate();

  return (
    <>
     <div className="style-box">
      <div className="box1 box-hov">
        <div className="box-img1">
          <img className="imgbox" src={Buyhome} alt="Image not found" />
        </div>
        <h4 className="box-heading">Buy a Home</h4>
        <p className="box-para">&nbsp;Find your place with an immersive photo <br/> experience and the most listings, including <br/> &nbsp; &nbsp; &nbsp;things you won't find anywhere else.</p>
        <div className="btnn">
          <button className="box-btn btnbox1" onClick={() => navigate('buy.js')}>Find a Home</button>
        </div>
      </div>

      <div className="box2 box-hov">
        <div className="box-img2">
          <img className="imgbox" src={Renthome} alt="Image not found" />
        </div>
        <h4 className="box-heading">Rent a Home</h4>
        <p className="box-para">We’re creating a seamless online experience <br/> from shopping on the largest rental network, <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; to applying, to paying rent.</p>
        <div className="btnn">
          <button className="box-btn btnbox2" onClick={() => navigate('rent.js')}>Find a Rental</button>
        </div>
      </div>

      <div className="box3 box-hov">
        <div className="box-img3">
          <img className="imgbox" src={Sellhome} alt="Image not found" />
        </div>
        <h4 className="box-heading">Sell a Home</h4>
        <p className="box-para">No matter what path you take to sell your <br/> &nbsp; &nbsp; &nbsp; home, we can help you navigate <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;a successful sale.</p>
        <div className="btnn">
          <button className="box-btn btnbox3" onClick={() => navigate('buy.js')}>See your options</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default StyleBox;