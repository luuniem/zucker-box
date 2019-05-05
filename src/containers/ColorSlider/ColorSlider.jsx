import React, { PureComponent } from "react";
import "./ColorSlider.scss";
import Axios from "axios";
import { debounce } from "debounce";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";

class ColorSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hue: ""
    };
  }

  slideHandler = debounce(hue => {
    Axios.put(`${api_link}${username}/lights/4/state`, {
      hue: this.setState({ hue })
    }).then(response => {
      console.log(response);
    });
  }, 500);

  //   async componentDidMount() {
  //     await Axios.put(`${api_link}${username}/lights/4/state`, {
  //       hue: 35000
  //     }).then(response => {
  //       console.log(response);
  //     });
  //   }

  render() {
    const { slideHandler } = this;
    console.log(slideHandler);

    return (
      <div className="slide-container">
        <h3>SLIDE TO CHANGE COLOR</h3>

        <input
          type="range"
          min="0"
          max="65535"
          className="slider"
          id="myRange"
          onChange={e => slideHandler(e.target.value)}
        />
      </div>
    );
  }
}

export default ColorSlider;
