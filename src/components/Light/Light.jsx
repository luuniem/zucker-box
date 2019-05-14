import React from "react";
import "./Light.scss";
import Switch from "@material-ui/core/Switch";

const Light = props => {
  const { lightName, selectLight, triggerSwitch, lightId } = props;
  return (
    <li onClick={selectLight}>
      {lightName}
      {lightId}
      <Switch onChange={triggerSwitch} />
    </li>
  );
};

export default Light;
