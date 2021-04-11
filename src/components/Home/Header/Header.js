import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent/HeaderContent";
import Info from "./Info/Info";

const Header = () => {
  return (
    <header>
      <HeaderContent />
      <Info />
    </header>
  );
};

export default Header;
