import React from "react";
import "./Info.css";
import Infos from "./InfoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <div className='info-cards-container'>
      {Infos.map((info) => (
        <InfoCard info={info} />
      ))}
    </div>
  );
};

const InfoCard = (props) => {
  const { title, description, icon, background } = props.info;
  let bgColor;
  if (background === "blue") {
    bgColor = { backgroundColor: "#3a4256" };
  }

  if (background === "cyan") {
    bgColor = { backgroundColor: "#1cc7c1" };
  }
  return (
    <div className='info-card' style={bgColor}>
      <div className='info-card-icon'>
        <FontAwesomeIcon className='info-icons' icon={icon} />
      </div>
      <div className='info-card-text'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Info;
