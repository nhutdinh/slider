import React from "react";
import { GhostInputStyled, OriginalInputStyled } from "./Slider.styled";

export interface SliderProps {
  lowValue: number;
  highValue: number;
}
const Slider: React.FC<SliderProps> = (
  props: SliderProps
): React.ReactElement => {
  const [low, setLow] = React.useState(props.lowValue);
  const [high, setHigh] = React.useState(props.highValue);
  const updateOriginal = (event): void => {
    const value = event.target.value;
    setLow(value);
  };
  const updateGhost = (event): void => {
    const value = event.target.value;
    setHigh(value);
  };
  const inputProps = { lowValue: low, highValue: high, min: 0, max: 100 };

  return (
    <div>
      <OriginalInputStyled
        {...inputProps}
        value={low}
        onChange={updateOriginal}
      ></OriginalInputStyled>
      <GhostInputStyled
        {...inputProps}
        onChange={updateGhost}
        value={high}
      ></GhostInputStyled>
    </div>
  );
};

export default Slider;
