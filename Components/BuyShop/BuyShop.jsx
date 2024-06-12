import React from 'react'
import "./BuyShop.scss"
import product1 from "../../assets/svg/image 11.svg"
import product2 from "../../assets/svg/image 15.svg"
import product3 from "../../assets/svg/image 16.svg"
import Platej from "../../assets/svg/Platej.svg"
function BuyShop() {
  return (
    <>
    <h1 className='home'>Home <span>/ Shop / Checkout</span></h1>
    <h1 className='h1-billing'>Billing Address</h1>
    <div className='buy'>
      <div className='inputs-buy'>
        
        <div className='inputs-info'>
            <h2>First Name<span>*</span></h2>
            <input type="text" />
        </div>
        <div className='inputs-info'> 
            <h2>Last Name<span>*</span></h2>
            <input type="text" />
        </div>
        <div className='inputs-info'>
            <h2>Country / Region<span>*</span></h2>
            <input type="text" placeholder='Select a country / region' />
        </div>
        <div className='inputs-info'>
            <h2>Town / City<span>*</span></h2>
            <input type="text" />
        </div>
        <div className='inputs-info'>
            <h2>Street Address<span>*</span></h2>
            <input type="text" placeholder='House number and street name' />
        </div>
        <div className='inputs-info'>
            <h2>Optional</h2>
            <input type="text" placeholder='Appartment, suite, unit, etc. (optional)' />
        </div>
        <div className='inputs-info'>
            <h2>State<span>*</span></h2>
            <input type="text" placeholder='Select a state' />
        </div>
        <div className='inputs-info'>
            <h2>Zip<span>*</span></h2>
            <input type="text" />
        </div>
        <div className='inputs-info'>
            <h2>Email address<span>*</span></h2>
            <input type="text" />
        </div>
        <div className='inputs-info'>
            <h2>Phone Number<span>*</span></h2>
            <input type="number" />
        </div>
        <div className='ship'>
            <input type="radio" />
            <h3>Ship to a different address?</h3>
        </div><br />
        <h3>Order notes (optional)</h3><br />
        <input type="text" className='Order' />
      </div>
      <div className='buy-products'>
        <h1>Your Order</h1>
        <div className='product-category'>
            <h2 className='category-products'>Products</h2>
            <h2 className='category-subotal'>Subtotal</h2>
            <hr />
        </div>
        <div className="products">
            <div className='product-1'>
                <img src={product1} alt="" />
                <div>
                    <h2>Barberton Daisy</h2>
                    <h3>SKU: 1995751877966</h3>
                </div>
                <h2>(x 2)</h2>
                <h4>$238.00</h4>
            </div>
            <div className='product-2'>
            <img src={product2} alt="" />
                <div>
                    <h2>Blushing Bromeliad</h2>
                    <h3>SKU: 19957518757065</h3>
                </div>
                <h2>(x 6)</h2>
                <h4>$834.00</h4>
            </div>
            <div className='product-3'>
            <img src={product3} alt="" />
                <div>
                    <h2>Aluminum Plant</h2>
                    <h3>SKU: 1995751877786</h3>
                </div>
                <h2>(x 9)</h2>
                <h4>$1,611.00</h4>
            </div>

        </div>
        <h4>Have a coupon code? <span>Click here</span></h4>
        <div className='sub-copon'>
            <div>
            <h2>Subtotal</h2>
            <h3>$2,683.00</h3>
            </div>
            <div>
            <h2>Coupon Discount</h2>
            <h3>(-) 00.00</h3>
            </div>
            <div>
            <h2>Shiping</h2>
            <h3>$16.00</h3>
            </div>
        </div>
        <h3 className='view-ship'>View shipping charge</h3>
        <hr className='hr' />
        <div className='totals-price'>
            <h1>Total</h1>
            <h2>$2,699.00</h2>
        </div>
        <h1 className='Payment Method'>Payment Method</h1>
        <div className='radio-h2-icons'>
            <input type="radio" />
            <div>
            <img src={Platej} alt="" />
            </div>
        </div>
        <div className='radio-h2-icons'>
            <input type="radio" />
            <div>
            <h2>Dorect bank transfer</h2>
            </div>
        </div>
        <div className='radio-h2-icons'>
            <input type="radio" />
            <div>
            <h2>Cash on delivery</h2>
            </div>
        </div>
        <button>Place Order</button>
      </div>
    </div>
    </>
  )
}

export default BuyShop

