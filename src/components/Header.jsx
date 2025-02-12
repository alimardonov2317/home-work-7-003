import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
  return (
    <header className="bg-[#231d1d] px-12">
      <nav className="container h-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-2xl text-white">
          <a href="#">
            <h3><Link to="/">Products</Link></h3>
          </a>
        </div>
     
        <ul className="flex gap-10 text-white items-center text-[18px]">
          <li className="text-gray-100 transition-all ease-in-out duration-300 hover:text-blue-500">
            <span><NavLink to="/">Home</NavLink></span>
          </li>
          <li className="text-gray-100 transition-all ease-in-out duration-300 hover:text-blue-500">
            <span><NavLink to="/about">About</NavLink></span>
          </li>
          <li className="text-gray-100 transition-all ease-in-out duration-300 hover:text-blue-500">
            <span><NavLink to="/contact">Contact</NavLink></span>
          </li>
          <li className="text-gray-100 transition-all ease-in-out duration-300 hover:text-blue-500">
            <span><NavLink to="/wishlist"><FaRegHeart className='hover:text-red-400'/></NavLink></span>
          </li>
          <li className="text-gray-100 transition-all ease-in-out duration-300 hover:text-blue-500">
            <span><NavLink to="/cart"><FiShoppingCart /></NavLink></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header



