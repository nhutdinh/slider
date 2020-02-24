import React from "react";
import Slider from "./Slider";
import ReactDOM from "react-dom";
import { SliderStyled } from "./Slider.styled";

const App = (): React.ReactElement => {
  const min = 0;
  const max = 100;
  const step = (max - min) / 3;

  return (
    <SliderStyled style={{ padding: "150px 35px" }}>
      <Slider
        onSlide={(slider, values, handle): void => {
          console.log(values, handle);
        }}
        // onChange={(slider, values, handle): void => {
        //   console.log(values, handle);
        //   let value = 100;

        //   if (values[0] < step / 2) value = 0;
        //   else if (values[0] < (step + 2 * step) / 2) value = step;
        //   else if (values[0] < (3 * step + 2 * step) / 2) value = 2 * step;

        //   slider.set(value);
        // }}
      ></Slider>
    </SliderStyled>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
