import './App.css';
import {  Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import ProductCart from "./Components/ProductCart/ProductCart"
import Home from './Components/Home/Home';
import ProductShop from './Components/ProductShop/ProductShop';
import HomeMobile from "./components-Mobile/Home-Mobile/HomeMobile"
import CartMobile from "./components-Mobile/CartMobile/CartMobile"
import BuyMobile from "./components-Mobile/BuyMobile/BuyMobile"
import ProductMobile from "./components-Mobile/ProductMobile/ProductMobile"
import LoginMobile from "./components-Mobile/Auth-mobile/LoginMobile"
import RegisterMobile from "./components-Mobile/Auth-mobile/RegisterMobile"
import BuyShop from './Components/BuyShop/BuyShop';
import MyAccount from './Components/MyAccount/MyAccount';
import Address from './Components/Address/Address';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<ProductShop/>}/>
        <Route path='/cart' element={<ProductCart/>}/>
        <Route path='/buy' element={<BuyShop/>}/>
        <Route path='/my-acc' element={<MyAccount/>}/>
        <Route path='/address' element={<Address />}/>
        {/* mobile */}
        <Route path='/home-mobile' element={<HomeMobile/>}/>
        <Route path='/buy-mobile' element={<BuyMobile/>}/>
        <Route path='/product-mobile' element={<ProductMobile/>}/>
        <Route path='/cart-mobile' element={<CartMobile/>}/>
        <Route path='/login-mobile' element={<LoginMobile/>}/>
        <Route path='/register-mobile' element={<RegisterMobile/>}/>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
