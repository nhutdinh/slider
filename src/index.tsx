import React from "react";
import Slider from "./Slider";
import ReactDOM from "react-dom";

const App = (): React.ReactElement => {
  return <Slider lowValue={10} highValue={80}></Slider>;
};

ReactDOM.render(<App />, document.getElementById("root"));
