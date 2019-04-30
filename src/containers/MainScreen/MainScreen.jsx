import React, { PureComponent } from "react";
import LightSwitch from "./../../components/LightSwitch/LightSwitch";
import Switches from "./../Switches/Switches";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <LightSwitch className="primary-color" />
      </div>
    );
  }
}

export default MainScreen;
