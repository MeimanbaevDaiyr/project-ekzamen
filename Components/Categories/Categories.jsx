import React from 'react'
import "./Categories.scss"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Price from "../../assets/Image/Price.png"
import Sale from "../../assets/Image/Sale.png"
import Tovar1 from "../../assets/Image/Tovar 1.png"
import Tovar2 from "../../assets/Image/Tovar 2.png"
import Tovar3 from "../../assets/Image/Tovar  3.png"
import Tovar4 from "../../assets/Image/Tovar 4.png"
import Tovar5 from "../../assets/Image/Tovar  5.png"
import Tovar6 from "../../assets/Image/Tovar 6.png"
import Tovar7 from "../../assets/Image/Tovar 7.png"
import Tovar8 from "../../assets/Image/Tovar 8.png"
import Tovar9 from "../../assets/Image/Tovar 9.png"
function Categories() {
  return (
    <div className='Categories'>
      <div className='Categories-1'>
        <h1>Categories</h1>
        <div className='Categor'><h3 className='House-Plants'>House Plants</h3>(33)</div>
        <div className='Categor'><h3>Potter Plants</h3>(12)</div>
        <div className='Categor'><h3>Seeds</h3>(65)</div>
        <div className='Categor'><h3>Small Plants</h3>(39)</div>
        <div className='Categor'><h3>Big Plants</h3>(23)</div>
        <div className='Categor'><h3>Succulents</h3>(17)</div>
        <div className='Categor'><h3>Trerrariums</h3>(19)</div>
        <div className='Categor'><h3>Gardening</h3>(13)</div>
        <div className='Categor'><h3>Accessories</h3>(18)</div>
        <img src={Price} alt="" />
        <button>Filter</button>
        <h1>Size</h1>
        <div className='Categor'><h3>Small</h3>(109)</div>
        <div className='Categor'><h3>Medium</h3>(86)</div>
        <div className='Categor'><h3>Large</h3>(78)</div>
        <div className="SuperSale">
          <h1>Super Sale</h1>
          <h3>UP TO 75% OFF</h3><br />
          <img src={Sale} alt="" />
        </div>
      </div>
      

      <div className='Categories-2'> 
        <div className='Tovar-text'>
          <div>
            <h2>All Plants</h2>
            <h2>New Arrivals</h2>
            <h2>Sale</h2>
          </div>
          <div>
            <h2>Short by:</h2>
            <h2>Default sorting</h2>
          </div>
        </div>
        <div className='Tovar'>
            <div>
              <img src={Tovar1} alt="" />
              <h2>Barberton Daisy</h2>
              <h1>$119.00</h1>
            </div>
            <div>
              <img src={Tovar2} alt="" />
              <h2>Angel Wing Begonia</h2>
              <h1>$169.00</h1>
            </div>
            <div>
              <img src={Tovar3} alt="" />
              <h2>African Violet</h2>
              <h1>$199.00</h1>
            </div>
            <div>
              <img src={Tovar4} alt="" />
              <h2>Beach Spider Lily</h2>
              <h1>$129.00</h1>
            </div>
            <div>
              <img src={Tovar5} alt="" />
              <h2>Blushing Bromeliad</h2>
              <h1>$139.00</h1>
            </div>
            <div>
              <img src={Tovar6} alt="" />
              <h2>Aluminum Plant</h2>
              <h1>$179.00</h1>
            </div>
            <div>
              <img src={Tovar7} alt="" />
              <h2>Bird's Nest Fern</h2>
              <h1>$99.00</h1>
            </div>
            <div>
              <img src={Tovar8} alt="" />
              <h2>Broadleaf Lady Palm</h2>
              <h1>$59.00</h1>
            </div>
            <div>
                <img src={Tovar9} alt="" />
                <h2>Chinese Evergreen</h2>
                <h1>$39.00</h1>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Categories
