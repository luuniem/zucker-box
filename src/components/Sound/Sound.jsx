import React from "react";
import mp3 from "./../../assets/died-in-your-arms.mp3";

const song = mp3;
const Sound = props => {
  return <audio src={song} controls={true} autoPlay={true} type="audio/mpeg" />;
};

export default Sound;
