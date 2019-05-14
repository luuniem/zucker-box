import React from "react";
import "./HueSlider.scss";
const HueSlider = props => {
  const { changeColor } = props;
  return (
    <div className="slide-container">
      <input
        type="range"
        min="0"
        max="65535"
        className="slider"
        id="myRange"
        onChange={changeColor}
      />
    </div>
  );
};

export default HueSlider;
