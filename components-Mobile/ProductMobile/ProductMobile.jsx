import React from 'react'
import "./ProductMobile.scss"
import Product from "../../assets/Image/Tovar 1.png"
import Heart from "../../assets/svg/heart.svg"
import Back from "../../assets/svg/Back.svg"
import Grade from "../../assets/svg/ZvezdaMobile.svg"
import Size from "../../assets/svg/SizeMobile.svg"
import { SlBasket } from "react-icons/sl";
function ProductMobile() {
  return (
    <div className='Product-lob'>
      <div className='Product'>
        {/* 1 */}
        <div className="Product-back-heart">
            <img className='Back' src={Back} alt="" />
            <img className='Heart' src={Heart} alt="" />
            <img className='Product-image' src={Product} alt="" />
        </div>
        {/* 2 */}
          <div className="Product-info">
                <div className='title-grade'>
                  <h1>Barberton Daisy</h1>
                  <img src={Grade} alt="" />
                </div>
                <p>The ceramic cylinder planters come with a wooden <br /> stand to help elevate your plants off the ground. The <br /> ceramic cylinder planters come.</p>
                <img src={Size} alt="" />
                <h3>SKU: 1995751877966</h3>
                <h3>Categories: Potter Plants</h3>
                <h3>Tags: Home, Garden, Plants</h3>
                <div>
                  <div className='qty-button'>
                    <div className='qty'>
                      <h2>Qty</h2>
                      <div>
                      <button>-</button>
                    <h1>1</h1>
                    <button>+</button>
                      </div>
                    </div>
                    <h4>$119.00</h4>
                  </div>
                  <div className='basket-button'>
                    <button>Buy Now</button>
                    <div className="basket-div"><SlBasket className='basket' /></div>
                    
                  </div>
                </div>
          </div>
          {/* end */}
      </div>
    </div>
  )
}

export default ProductMobile
