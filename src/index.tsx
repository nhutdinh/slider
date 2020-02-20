import React from "react";
import Slider from "./Slider";
import ReactDOM from "react-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <Slider
        onChange={(a, b): void => {
          console.log(a, b);
        }}
        lowValue={10}
        highValue={80}
        dualHandler
      ></Slider>
      <Slider
        onChange={(a, b): void => {
          console.log(a, b);
        }}
        highValue={10}
      ></Slider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
