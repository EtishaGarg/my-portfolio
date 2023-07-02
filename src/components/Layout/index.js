import React from 'react'
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <hr className="h-0.5 bg-gray-100 border-0"></hr>
      <Footer/>
    </div>
  )
}

export default Layout