import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbScan } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import heart from "../../assets/svg/heart.svg"
import product1 from "../../assets/Image/Tovar 1.png"
import product2 from "../../assets/Image/Tovar 2.png"
import product3 from "../../assets/Image/Tovar  3.png"
import product4 from "../../assets/Image/Tovar  5.png"
import bannerMobile from "../../assets/Image/Banner.png"
import filter from "../../assets/svg/Filter.svg"
import "./HomeMobile.scss"
function HomeMobile() {
  return (
    <div className='black'>
    <div className='home-mobile'>
      <div className='search-filter'>
      <CiSearch className='CiSearch' />
        <input type="text" placeholder='Find your plants' />
        <img src={filter} alt="" />
      </div>
      <div className='banner-mobile'><img src={bannerMobile} alt="" /></div>
      <div className='products-category'>
          <div className='category'>
            <h2>All Plants</h2>
            <h2>New Arrivals</h2>
            <h2>Sale</h2>
          </div>
          <div className='products'>
            {/* 1 */}
            <div>
              <img className='icons' src={heart} alt="" />
              <img className='product' src={product1} alt="" />
              <h3>Barberton Daisy</h3>
              <h4>$119.00</h4>
            </div>
            {/* 2 */}
            <div>
              <img className='icons' src={heart} alt="" />
              <img className='product' src={product2} alt="" />
              <h3>Angel Wing Begonia</h3>
              <h4>$169.00</h4>
            </div>
            {/* 3 */}
            <div>
              <img className='icons' src={heart} alt="" />
              <img className='product' src={product3} alt="" />
              <h3>African Violet</h3>
              <h4>$199.00</h4>
            </div>
            {/* 4 */}
            <div>
              <img className='icons' src={heart} alt="" />
              <img className='product' src={product4} alt="" />
              <h3>Blushing Bromeliad</h3>
              <h4>$139.00</h4>
            </div>
          </div>
      </div>
      <div className='footerMobile'>
        <div className='scan'><TbScan className='TbScan' /></div>
        <div className='category-footer'><IoMdHome className='IoMdHome' /> <FaRegHeart className='IoMdHome' /> <SlBasket className='IoMdHome' /> <CgProfile className='IoMdHome' /></div>
      </div>
    </div>
    </div>
  )
}
// <TbScan /> 
export default HomeMobile
