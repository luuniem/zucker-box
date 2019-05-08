import React, { Component } from "react";
// import Sound from "./../../components/Sound/Sound";
import mp3 from "./../../assets/died-in-your-arms.mp3";
import { analyze } from "web-audio-beat-detector";
const song = mp3;

class Alarm extends Component {
  componentDidMount() {
    let context = new AudioContext();
    let analyser = context.createAnalyser();
    let audio = this.refs.audio;
    let audioSrc = context.createMediaElementSource(audio);

    audioSrc.connect(analyser);
    audioSrc.connect(context.destination);
    analyser.connect(context.destination);
    function renderFrame() {
      let freqData = new Uint8Array(analyser.frequencyBinCount);

      analyser.getByteFrequencyData(freqData);

      console.log(freqData);
    }
    renderFrame();
  }

  render() {
    const { audio } = this;
    return (
      <div>
        <audio
          src={song}
          controls={true}
          autoPlay={true}
          type="audio/mpeg"
          id="audio"
          ref="audio"
        />
      </div>
    );
  }
}

export default Alarm;
