import React from "react";
import {
  GhostInputStyled,
  OriginalInputStyled,
  SliderInputDot
} from "./Slider.styled";

export interface SliderProps {
  lowValue?: number;
  highValue: number;
  dualHandler?: boolean;
  onChange?: (low: number, high: number) => void;
}
const Slider: React.FC<SliderProps> = (
  props: SliderProps
): React.ReactElement => {
  const [low, setLow] = React.useState(props.lowValue || 0);
  const [high, setHigh] = React.useState(props.highValue);
  const [zIndex, setZIndex] = React.useState(3);
  const updateOriginal = (event): void => {
    const value = event.target.value;
    setLow(value);
    props.onChange && props.onChange(value, high);
  };
  const updateGhost = (event): void => {
    const value = event.target.value;
    if (value == 10) {
      console.log("EEEEEEEEE");
    }
    setZIndex(value >= 8 && value <= 12 ? 0 : 3);
    setHigh(value);
    props.onChange && props.onChange(low, value);
  };

  const inputProps = { lowValue: low, highValue: high, min: 0, max: 100 };

  return (
    <div style={{ position: "relative" }}>
      {props.dualHandler && (
        <OriginalInputStyled
          {...inputProps}
          value={low}
          onChange={updateOriginal}
        ></OriginalInputStyled>
      )}
      <SliderInputDot style={{ left: 10, zIndex: zIndex }}></SliderInputDot>
      <GhostInputStyled
        {...inputProps}
        onChange={updateGhost}
        value={high}
      ></GhostInputStyled>
    </div>
  );
};

export default Slider;
