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
  const update = (): void => {
    setLow(20);
    setHigh(60);
  };
  const originalInput = <input onInput={update} type="range"></input>;
  const ghostInput = React.cloneElement(originalInput);

  return (
    <div>
      <OriginalInputStyled lowValue={low} highValue={high}>
        {originalInput}
      </OriginalInputStyled>
      <GhostInputStyled lowValue={low} highValue={high}>
        {ghostInput}
      </GhostInputStyled>
    </div>
  );
};

export default Slider;
