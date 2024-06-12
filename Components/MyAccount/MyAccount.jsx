import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { BsGeoAlt } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { BsEyeSlash } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import "./MyAccount.scss"
function MyAccount() {
  return (
    <div className='MyAccaunt'>
        <div className='Category-MyAcc'>
            <div>
                <FaRegUserCircle/>
                <h2>Account Details</h2>
            </div>
            <div>
                <BsGeoAlt/>
                <h2>Address</h2>
            </div>
            <div>
                <SlBasket/>
                <h2>Orders</h2>
            </div>
            <div>
                <FaRegHeart/>
                <h2>Wishlist</h2>
            </div>
            <div>
                <FiActivity/>
                <h2>Reports</h2>
            </div>
            <div>
                <IoMdDownload/>
                <h2>Downloads</h2>
            </div>
            <div>
                <FaExclamationTriangle/>
                <h2>Support</h2>
            </div>
            <div>
                <IoExitOutline/>
                <h2>Loguot</h2>
            </div>
        </div>
        <div className='Info-MyAcc'>
            <div className='inputs-info'>
                <h1>Personal Information</h1>
                <div className='inputs-infos'>
                    <div>
                        <h2>First Name<span>*</span></h2>
                        <input type="text" />
                    </div>
                    <div>
                        <h2>Last Name<span>*</span></h2>
                        <input type="text" />
                    </div>
                    <div>
                        <h2>Email address<span>*</span></h2>
                        <input type="email" />
                    </div>
                    <div>
                        <h2>Phone Number<span>*</span></h2>
                        <input type="number" value={996} />
                        <input type="number" />
                    </div>
                    <div>
                        <h2>Username<span>*</span></h2>
                        <input type="text" />
                    </div>
                    <div>
                        <h2>Photo</h2>
                        <CiImageOn/>
                        <button>Change</button>
                        <h2>Remove</h2>
                    </div>
                </div>
            </div>
            <div className='password-info'>
                <h1>Password change</h1>
                <div>
                    <h2>Current password</h2>
                    <input type="text" />
                    <BsEyeSlash/>
                </div>
                <div>
                    <h2>New password</h2>
                    <input type="text" />
                    <BsEyeSlash/>
                </div>
                <div>
                    <h2>Confirm new password</h2>
                    <input type="text" />
                    <BsEyeSlash/>
                </div>
                <button>Save Change</button>
            </div>
        </div>
    </div>
  )
}

export default MyAccount
