import React from "react";
import Button from "@material-ui/core/Button";

const LightSwitch = props => {
  const { lightSwitch } = props;
  return (
    <Button variant="contained" color="primary" onClick={lightSwitch}>
      Light Switch
    </Button>
  );
};

export default LightSwitch;
