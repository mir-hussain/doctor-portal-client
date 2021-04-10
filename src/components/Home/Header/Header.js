import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent/HeaderContent";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <HeaderContent />
    </header>
  );
};

export default Header;
