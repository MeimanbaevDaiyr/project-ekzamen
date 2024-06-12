import React from 'react'
import './Blog.scss'
import Image_1 from "../../assets/Image/image-1.png"
import Image_2 from "../../assets/Image/image-2.png"
import Image_3 from "../../assets/Image/image-3.png"
import Image_4 from "../../assets/Image/image-4.png"
function Blog() {
  return (
    <div className='blog'>
      <h1>Our Blog Posts</h1>
      <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
      <div className="blocks">
        <div className='one-blog'>
        <img src={Image_1} alt="" />
        <div>
        <h5>September 12  I Read in 6 minutes</h5>
        <h3>Cactus & Succulent <br /> Care Tips</h3>
        <p>Cacti are succulents are easy care <br /> plants for any home or patio. </p>
        <h6>Read More</h6>
        </div>
      </div>

      <div className='one-blog'>
        <img src={Image_2} alt="" />
        <div>
        <h5>September 13  I Read in 2 minutes</h5>
        <h3>Top 10 Succulents for <br /> Your Home</h3>
        <p>Best in hanging baskets. Prefers <br /> medium to high light. </p>
        <h6>Read More</h6>
        </div>
      </div>

      <div className='one-blog'>
        <img src={Image_3} alt="" />
        <div>
        <h5>September 12  I Read in 6 minutes</h5>
        <h3>Cactus & Succulent <br /> Care Tips</h3>
        <p>Cacti are succulents are easy care <br /> plants for any home or patio. </p>
        <h6>Read More</h6>
        </div>
      </div>

      <div className='one-blog'>
        <img src={Image_4} alt="" />
        <div>
        <h5>September 12  I Read in 6 minutes</h5>
        <h3>Cactus & Succulent <br /> Care Tips</h3>
        <p>Cacti are succulents are easy care <br /> plants for any home or patio. </p>
        <h6>Read More</h6>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Blog
