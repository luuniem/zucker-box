import React from "react";
import "./Lights.scss";
import Switch from "@material-ui/core/Switch";

const LightSwitch = props => {
  const {
    triggerPC,
    triggerTest,
    triggerBedLeft,
    triggerBedRight,
    triggerTest2
  } = props;
  return (
    <ul className="lights-list">
      <li>
        <div className="flex-box">
          <label>PC</label>
          <Switch onChange={triggerPC} />
        </div>
      </li>
      <li>
        <div className="flex-box">
          <label>Desk Lamp</label>
          <Switch onChange={triggerTest} />
        </div>
      </li>
      <li>
        <div className="flex-box">
          <label>Bed - Left</label>
          <Switch onChange={triggerBedLeft} />
        </div>
      </li>
      <li>
        <div className="flex-box">
          <label>Bed - Right</label>
          <Switch onChange={triggerBedRight} />
        </div>
      </li>
      <li>
        <div className="flex-box">
          <label>Test 2</label>
          <Switch onChange={triggerTest2} />
        </div>
      </li>
    </ul>
  );
};

export default LightSwitch;
