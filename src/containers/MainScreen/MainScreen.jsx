import React, { PureComponent } from "react";
import Lights from "../../components/Lights/Lights";
import ColorSlider from "./../ColorSlider/ColorSlider";
import Axios from "axios";
import "./MainScreen.scss";

const username = "efhX0bOeYSyCShCbb7maUfdZd-80624DviBfbXZh";
const api_link = "https://192.168.1.106/api/";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lights: []
      // togglePc: null,
      // toggleTest: null,
      // toggleBedLeft: null
    };
  }

  // async componentDidMount(e) {
  //   Axios.get(`${api_link}${username}/groups/1`).then(res => {
  //     console.log(res);
  //   });

  //   this.setState({ toggleOn: this.state.toggleOn });
  //   Axios.put(`${api_link}${username}/groups/1/state`, {
  //     all_on: true
  //   });
  // }

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
  triggerBedLeftHandler(e) {
    this.setState({ toggleBedLeft: !this.state.toggleBedLeft });
    Axios.put(`${api_link}${username}/lights/5/state`, {
      on: !this.state.toggleBedLeft
    });
  }
  triggerBedRightHandler(e) {
    this.setState({ toggleBedRight: !this.state.toggleBedRight });
    Axios.put(`${api_link}${username}/lights/9/state`, {
      on: !this.state.toggleBedRight
    });
  }

  render() {
    const {
      triggerPCHandler,
      triggerTestHandler,
      triggerBedLeftHandler,
      triggerBedRightHandler
      // triggerTest2Handler
    } = this;

    return (
      <div>
        <Lights
          className="primary-color"
          triggerPC={triggerPCHandler.bind(this)}
          triggerTest={triggerTestHandler.bind(this)}
          triggerBedLeft={triggerBedLeftHandler.bind(this)}
          triggerBedRight={triggerBedRightHandler.bind(this)}
          // triggerTest2={triggerTest2Handler.bind(this)}
        />

        <ColorSlider />

        <h3>CHOOSE COLOR</h3>
      </div>
    );
  }
}

export default MainScreen;
