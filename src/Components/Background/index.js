import React from "react";
import backGround from "../../images/Group 1.png";
import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <img className="bg" src={backGround} alt="background green" />
    </div>
  );
};

export default Background;
