import React, { PureComponent } from "react";
import "./ColorSlider.scss";
import Axios from "axios";
import { debounce } from "lodash";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";
class ColorSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hue: ""
    };
  }
  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }

  slideHandler = async e => {
    this.setState({ hue: e.target.value });
    console.log(this.state.hue);
    await Axios.put(`${api_link}${username}/lights/4/state`, {
      hue: Number(this.state.hue)
    }).then(response => {
      console.log(response);
    });
  };

  //   componentWillUnmount = () => {
  //     this.slideHandler.cancel();
  //   };
  //   slideHandler = e => {
  //     this.setState({ hue: e.target.value });
  //     console.log(this.state.hue);
  //   };

  //   async componentDidMount() {
  //     await Axios.put(`${api_link}${username}/lights/4/state`, {
  //       hue: Number(this.state.hue)
  //     }).then(response => {
  //       console.log(response);
  //     });
  //   }

  render() {
    const { slideHandler } = this;
    const { hue } = this.state;
    return (
      <div className="slide-container">
        <h3>SLIDE TO CHANGE COLOR</h3>
        <p>{hue}</p>
        <input
          type="range"
          min="0"
          max="65535"
          className="slider"
          id="myRange"
          //   onChange={e => slideHandler(e.target.value)}
          onChange={this.debounceEvent(slideHandler, 500)}
        />
      </div>
    );
  }
}

export default ColorSlider;
