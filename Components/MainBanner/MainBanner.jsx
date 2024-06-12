import React from 'react';
import Banner from "../../assets/Image/MainBanner.png";
import "./MainBanner.scss"
function MainBanner() {
  return (
    <div className='MainBanner'>
        <img src={Banner} alt="" />
        <div className="raspet">
          <button>SHOP NOW</button>
        </div>
    </div>
  );
}

export default MainBanner;

