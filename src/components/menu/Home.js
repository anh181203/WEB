import React from 'react'
// import Header from './HeaderAndFooter/Header'
// import Footer from './/HeaderAndFooter/Footer'
import { Outlet } from "react-router-dom";
import Footer from '../HeaderAndFooter/Footer';
import Header from '../HeaderAndFooter/Header';

function Home() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default Home
