import React from 'react'
import Tovar1 from "../../assets/Image/Tovar  3.png"
import "./TwoCatal.scss"
import Tovar2 from "../../assets/Image/Tovar  5.png"
function TwoCatal() {
  return (
    <div className='Container'>
      <div className='TwoBlock'>
        <div><img src={Tovar1} alt="" /></div>
        <div>
            <h1>Summer cactus <br />& succulents</h1>
            <p>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
            <button>Find More</button>
        </div>
        {/* cont 2 */}
      </div>
      <div className='TwoBlock'>
        <div><img src={Tovar2} alt="" /></div>
        <div>
            <h1>Styling Trends <br />& much more</h1>
            <p>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
            <button>Find More</button>
        </div>
      </div>
    </div>
  )
}

export default TwoCatal
