import React, { PureComponent } from "react";
import LightSwitch from "./../../components/LightSwitch/LightSwitch";
import ColorSlider from "./../ColorSlider/ColorSlider";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lightData: []
    };
  }

  async componentDidMount() {
    const api_call = await fetch(`${api_link}${username}/lights/4/`);
    const api_data = await api_call.json();
    this.setState({ lightData: api_data });
    console.log(this.state.lightData);
    // console.log(this.state.lightData);
  }

  switchLightHandler = async lightState => {
    const url = `${api_link}${username}/lights/4/state`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        on: true
      })
    });
  };
  switchOffHandler = async lightState => {
    const url = `${api_link}${username}/lights/4/state`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        on: false
      })
    });
  };

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
      </div>
    );
  }
}

export default MainScreen;
