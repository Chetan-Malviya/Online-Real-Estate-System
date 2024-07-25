import "../components/View.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const View = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="view">
        <div className="view-text">
          <p className="text-h">Explore homes on Property Fussion</p>
          <br />
          <p className="text-p">
            Take a deep dive and browse homes for sale, original neighborhood
            photos,
          </p>
          <p className="text-pp">
            resident reviews and local insights to find what is right for you.
          </p>
        </div>

        <div className="view-img">
          <div className="view-img1">
            <div className="img1 img-hov">
              <p className="img-p">New York, U.S.A</p>
              <button className="img-btn large" onClick={() => navigate('vh1.js')}>View Homes</button>
            </div>

            <div className="img2">
              <div className="image1 photo img-hov">
                <p className="img-p">Austin, TX</p>
                <button className="img-btn small" onClick={() => navigate('vh2.js')}>View Homes</button>
              </div>
              <div className="image2 photo img-hov">
                <p className="img-p">Mumbai, India</p>
                <button className="img-btn small" onClick={() => navigate('vh3.js')}>View Homes</button>
              </div>
            </div>
          </div>

          <div className="view-img2">
            <div className="img3">
              <div className="image3 photo img-hov">
                <p className="img-p">Oakland, CA</p>
                <button className="img-btn small" onClick={() => navigate('vh4.js')}>View Homes</button>
              </div>
              <div className="image4 photo img-hov img-hov">
                <p className="img-p">Scottsdale, AZ</p>
                <button className="img-btn small" onClick={() => navigate('vh5.js')}>View Homes</button>
              </div>
            </div>

            <div className="img4 img-hov">
              <p className="img-p">San Francisco</p>
              <button className="img-btn large" onClick={() => navigate('vh6.js')}>View Homes</button>
            </div>
          </div>

          <div className="view-img3">
            <div className="img5">
              <div className="image5 photo img-hov">
                <p className="img-p">Delhi, India</p>
                <button className="img-btn small" onClick={() => navigate('vh7.js')}>View Homes</button>
              </div>
              <div className="image6 photo img-hov">
                <p className="img-p">Chicago</p>
                <button className="img-btn small" onClick={() => navigate('vh8.js')}>View Homes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
