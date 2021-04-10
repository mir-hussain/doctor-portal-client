import React from "react";
import "./HeaderContent.css";
import chair from "../../../../images/chair.png";

const HeaderContent = () => {
  return (
    <div className='header-content'>
      <div className='header-content-text'>
        <h1>your new smile starts here</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis ullam fugit quaerat vitae optio dolorem minima tempora quae ratione quidem omnis non recusandae maxime
          corrupti veritatis, accusamus veniam, voluptatum adipisci
        </p>
        <button className='primary-btn'>get appointment</button>
      </div>
      <div className='header-content-image'>
        <img className='chair-image' src={chair} alt='dental chair' />
      </div>
    </div>
  );
};

export default HeaderContent;
