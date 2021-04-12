import React from "react";
import "./Introduction.css";
import kid from "../../../../images/kid.png";

const Introduction = () => {
  return (
    <section className='introduction-section'>
      <div className='intro-image-container'>
        <img src={kid} alt='kid' />
      </div>
      <div className='intro-text-container'>
        <h1>
          Exceptional dental care, <br /> on your term
        </h1>
        <p className='text-gray'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, odio voluptatem? Enim, neque minus et odit officia ea nulla quia earum commodi est quidem facere modi error, eos
          blanditiis! Totam quos recusandae repellendus. Dolores in ab nemo accusamus explicabo quos, dicta corporis aut mollitia. Adipisci rem perferendis quisquam asperiores magnam inventore magni,
          similique a neque. Ea, error exercitationem aliquid dolore voluptates soluta hic fuga eligendi voluptatem enim nisi numquam! Ex.
        </p>
        <button className='primary-btn'>Learn More</button>
      </div>
    </section>
  );
};

export default Introduction;
