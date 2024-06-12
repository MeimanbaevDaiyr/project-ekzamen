import React from 'react'
import "./Home.scss"
import Header from "../Header/Header"
import MainBanner from '../../Components/MainBanner/MainBanner';
import  Categoties from '../Categories/Categories'
import TwoCatal from "../TwoCatal/TwoCatal"
import Blog from "../Blog/Blog"
function Home() {
  return (
    <div>
      <MainBanner/>
      <Categoties/>
      <TwoCatal/>
      <Blog/>
    </div>
  )
}

export default Home
