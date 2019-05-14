import React, { PureComponent } from "react";
import Lights from "./../Lights/Lights";
import Axios from "axios";
import "./MainScreen.scss";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lights: []
    };
  }

  triggerPCHandler(e) {
    this.setState({ togglePc: !this.state.togglePc });
    Axios.put(`${api_link}${username}/lights/4/state`, {
      on: !this.state.togglePc
    });
  }

  triggerTestHandler(e) {
    this.setState({ toggleTest: !this.state.toggleTest });
    Axios.put(`${api_link}${username}/lights/10/state`, {
      on: !this.state.toggleTest
    });
  }

  render() {
    return (
      <div>
        <Lights />

        <h3>CHOOSE COLOR</h3>
      </div>
    );
  }
}

export default MainScreen;
