import React from "react";
import Button from "@material-ui/core/Button";
import "./LightSwitch.scss";

const LightSwitch = props => {
  const { lightSwitch, lightSwitchOff } = props;
  return (
    <div className="flex-box">
      <Button variant="contained" color="default" onClick={lightSwitch}>
        Light On
      </Button>
      <Button variant="contained" color="primary" onClick={lightSwitchOff}>
        Light Off
      </Button>
    </div>
  );
};

export default LightSwitch;
