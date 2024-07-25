import "../components/Navbar.css";
import Logo4 from "../assets/logo4.jpg"
import React from 'react'
import { useNavigate}  from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" onClick={() => navigate('/')}  src={Logo4} ></img>
      </div>

      <div className="nav-box1 fonts">
        <button className="butt1a" onClick={() => navigate('buy.js')}>Buy</button>
        <button className="butt1b" onClick={() => navigate('rent.js')}>Rent</button>
        <button className="butt1c">Mortgage</button>
      </div>

      <div className="nav-box2 fonts">
        <p className="butt21"></p>
        <button className="butt1d" onClick={() => navigate('buy.js')}>Saved Homes</button>
        <button className="butt1e">Additional Resources</button>
      </div>

      <div className="nav-signin">
        <button className="butt" onClick={() => navigate('LoginSignup')} style={{width: 90, height: 41}}>Sign in</button>
      </div>

      {/* <div className="nav-box3" style={{width: 16, height: 16}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div> */}
    </div>
    </>
  )
}

export default Navbar