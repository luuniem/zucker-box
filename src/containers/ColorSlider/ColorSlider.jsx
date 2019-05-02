import React, { PureComponent } from "react";
import "./ColorSlider.scss";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";

class ColorSlider extends PureComponent {
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

  render() {
    return (
      <div className="slide-container">
        <h3>SLIDE TO CHANGE COLOR</h3>
        <input type="range" min="0" max="65535" className="slider" />
      </div>
    );
  }
}

export default ColorSlider;
