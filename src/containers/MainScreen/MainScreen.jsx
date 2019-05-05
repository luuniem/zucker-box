import React, { PureComponent } from "react";
import LightSwitch from "./../../components/LightSwitch/LightSwitch";
import ColorSlider from "./../ColorSlider/ColorSlider";
import ColorButton from "./../../components/ColorButton/ColorButton";

import Axios from "axios";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lightData: [],
      state: []
    };
  }

  componentDidMount() {
    Axios.get(`${api_link}${username}/lights/4`, "state").then(res => {
      console.log(res);
    });
  }

  async switchLightHandler() {
    await Axios.put(`${api_link}${username}/lights/4/state`, {
      on: true
    }).then(res => {
      console.log(res);
    });
  }

  async switchOffHandler() {
    await Axios.put(`${api_link}${username}/lights/4/state`, {
      on: false
    });
  }

  render() {
    const { switchLightHandler, switchOffHandler } = this;

    return (
      <div>
        <LightSwitch
          className="primary-color"
          lightSwitch={switchLightHandler}
          lightSwitchOff={switchOffHandler}
        />

        <ColorSlider />

        <h3>CHOOSE COLOR</h3>
        <ColorButton>White</ColorButton>
      </div>
    );
  }
}

export default MainScreen;
