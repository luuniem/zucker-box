import React, { Component } from "react";
import "./Lights.scss";
// import Switch from "@material-ui/core/Switch";
// import HueSlider from "./../../components/HueSlider/HueSlider";

import { debounce } from "lodash";
import Config from "./../../config";
import Light from "./../../components/Light/Light";

class Lights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightsData: [],
      lightState: null
    };
  }
  debounceEvent(...args) {
    //prevents overloading the bridge
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let url = this.getUrlWithUsername() + "/lights";
    const data = await fetch(`${url}`);
    const dataArray = await data.json();
    this.setState({ lightsData: dataArray });
    console.log(this.state.lightsData);
  }

  getUrlWithUsername() {
    //returns string for api linking
    return Config.apiUrl + "/api/" + Config.username;
  }

  triggerSwitchHandler(id) {
    // let url = this.getUrlWithUsername() + "/lights/" + name + "/state";
    console.log(id);
  }

  // slideHandler = async (light, bodyData) => {
  //   this.setState({ hue: light.target.value });
  //   let url = this.getUrlWithUsername() + "/10/state";
  //   await Axios.put(url, {
  //     hue: Number(this.state.hue)
  //   }).then(response => {
  //     console.log(response);
  //   });
  // };

  render() {
    const { triggerSwitchHandler } = this;

    const { lightsData } = this.state;

    let results = Object.keys(lightsData).map(function(i) {
      return lightsData[i];
    });
    console.log(results);

    return (
      <ul className="lights-list">
        {results.map((light, index) => {
          return (
            <Light
              key={`${light}-${index}`}
              lightName={light.name}
              lightId={light.keys}
              triggerSwitch={() => triggerSwitchHandler(light.id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default Lights;
