import React from "react";
import "./Services.css";
import fluoride from "../../../../images/fluoride.png";
import cavity from "../../../../images/cavity.png";
import tooth from "../../../../images/tooth.png";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: tooth,
  },
];

const Services = () => {
  return (
    <section className='service-section'>
      <h1>Services we provide</h1>
      <div className='service-cards-container'>
        {serviceData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  const { name, img } = data;
  return (
    <div className='service-card'>
      <div className='service-card-image'>
        <img src={img} alt='' />
      </div>
      <div className='service-card-text'>
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis aperiam omnis eius</p>
      </div>
    </div>
  );
};

export default Services;
