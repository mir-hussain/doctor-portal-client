import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className='text-blue' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-blue' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='text-blue' to='/service'>
            Dental Service
          </Link>
        </li>
        <li>
          <Link className='text-white' to='/reviews'>
            Reviews
          </Link>
        </li>
        <li>
          <Link className='text-white' to='/blog'>
            Blog
          </Link>
        </li>
        <li>
          <Link className='text-white' to='/contact'>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
