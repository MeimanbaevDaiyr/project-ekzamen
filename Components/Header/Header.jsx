import React, {uceState, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss"
import Logo from "../../assets/svg/Logo.svg"
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosLogIn } from "react-icons/io";
function Header() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  function goToPages(link) {
    navigate(link);
  }
  function openMenu() {
    setActive(!active)
  }
  return (
    <div className='container-header'>
      <header>
        <div>
            <img onClick={() => goToPages("/")} src={Logo} alt="" />
        </div>
        <div>
            <h2 onClick={() => goToPages("/")}>Home</h2>
            <h2 onClick={() => goToPages("/shop")}>Shop</h2>
            <h2>Plant Care</h2>
            <h2>Blogs</h2>
        </div>
        <div>
            <FaSearch className='search-header'/>
            <SlBasket className='basket-header' onClick={() => goToPages("/cart")} />
            <button onClick={() => goToPages("/login")}><IoIosLogIn />Login</button>
        </div>
      </header>
    </div>
  )
}

export default Header
