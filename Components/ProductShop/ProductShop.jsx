import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import product_1 from "../../assets/Image/image 1.png"
import Product from "../../assets/Image/product-20-320x320 2.png"
import Zvezda from "../../assets/svg/Group 40.svg"
import "./ProductShop.scss"
function ProductShop() {
  return (
    <>
      <h3>Home / Shop</h3>
    <div className='shop-product'>
      <div className='Products-shop-image'>

        <div className='product-four'>
            <img className='Product-image-m' src={Product} alt="" />
            <img className='Product-image-m' src={Product} alt="" />
            <img className='Product-image-m' src={Product} alt="" />
            <img className='Product-image-m' src={Product} alt="" />
        </div>
        <div className='product-one'><img className='Product-image-b' src={product_1} alt="" /></div>
      </div>
      <div className='Products-info'>
            <h1>Barberton Daisy</h1>
            <div className='price-zvezda'>
                <h3>$119.00</h3>
                <img src={Zvezda} alt="" />
            </div>
            <h2>Short Description:</h2>
            <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants <br /> off the ground. The ceramic cylinder planters come with a wooden stand to help <br /> elevate your plants off the ground. </p>
            <div className='buttons'>
                <button className='button-plus'>-</button>
                <h5>1</h5>
                <button className='button-minus'>+</button>
                <button className='button-buy'>Buy NOW</button>
                <button className='button-add-cart'>Add to cart</button>
                <button className='button-heart'><CiHeart /></button>
            </div>
            <h3>SKU: 1995751877966</h3>
            <h3>Categories: Potter Plants</h3>
            <h3>Tags: Home, Garden, Plants</h3>
            <div className='logo-massage'>
                <h2>Share this products:</h2>
                <FaFacebookF className='FaFacebookF' />
                <FaTwitter className='FaTwitter' />
                <MdOutlineMailOutline className='MdOutlineMailOutline'/>
                <FaLinkedin className='FaLinkedin'/>
            </div>
      </div>
    </div>
    </>
  )
}

export default ProductShop
