import React from 'react'
import { MdDelete } from "react-icons/md";
import "./ProductCart.scss"
import image11 from "../../assets/svg/image 11.svg"
import image15 from "../../assets/svg/image 15.svg"
import image16 from "../../assets/svg/image 16.svg"
function ProductCart() {
  return (
    <div className='product-cart'>
      <h2>Home / Shop / Shopping Cart </h2>
      <div className='products-totals'>
        
        <div className='proucts'>
          <div className='category'>
          <h3>Products</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
          </div>
          <hr />
          {/* 1 */}
          <div className='product'>
            <img src={image11 } alt="" />
            <div>
              <h3>Barberton Daisy</h3>
              <h4>SKU: 1995751877966</h4>
            </div>
            <h4>$119.00</h4>
            <button className='buttons-plus-minus'>+</button>
            <h1>1</h1>
            <button className='buttons-plus-minus'>-</button>
            <h2>$238.00</h2>
            <button className='delete-icons'><MdDelete /></button>
          </div>
          {/* 2 */}
          <div className='product'>
            <img src={image11 } alt="" />
            <div>
              <h3>Barberton Daisy</h3>
              <h4>SKU: 1995751877966</h4>
            </div>
            <h4>$119.00</h4>
            <button className='buttons-plus-minus'>+</button>
            <h1>1</h1>
            <button className='buttons-plus-minus'>-</button>
            <h2>$238.00</h2>
            <button className='delete-icons'><MdDelete /></button>
          </div>
          {/* 3 */}
          <div className='product'>
            <img src={image11 } alt="" />
            <div>
              <h3>Barberton Daisy</h3>
              <h4>SKU: 1995751877966</h4>
            </div>
            <h4>$119.00</h4>
            <button className='buttons-plus-minus'>+</button>
            <h1>1</h1>
            <button className='buttons-plus-minus'>-</button>
            <h2>$238.00</h2>
            <button className='delete-icons'><MdDelete /></button>
          </div>
        </div>
        

        <div className='totals'>
          <h1>Cart Totals</h1>
          <hr />
          <h3>Coupon Apply</h3>
          <div className='input-cupon'>
            <input type="text" placeholder='Enter coupon code here...' />
            <button>Apply</button>
          </div>
          <div className='price-name'>
            <h2>Subtotal</h2>
            <h3>$2,683.00</h3>
          </div>
          <div className='price-name'>
            <h2>Coupon Discount</h2>
            <h3>(-) 00.00</h3>
          </div>
          <div className='price-name'>
            <h2>Shiping</h2>
            <h3>$16.00</h3>
          </div>
          <h4>View shipping charge</h4>
          <div className='total-price'>
            <h2>Total</h2>
            <h5>$2,699.00</h5>
          </div>
          <button>Proceed To Checkout</button>
          <h1>Continue Shopping</h1>
        </div>
      </div>
      <div className='products-youmay'></div>
    </div>
  )
}

export default ProductCart
