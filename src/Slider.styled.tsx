import styled from "styled-components";
import { SliderProps } from "./Slider";

const inputStyle = `padding: 0;
margin: 0;
display: inline-block;
vertical-align: top;`;
const trackBackground = (props: SliderProps) => `linear-gradient(
    to right,
    transparent ${Math.min(props.highValue, props.lowValue)}%,
    hsl(190, 80%, 40%) 0,
    hsl(190, 80%, 40%) ${Math.max(props.highValue, props.lowValue)}%,
    transparent 0 ) no-repeat 0 45% / 100% 40%;;`;

export const OriginalInputStyled = styled.input.attrs({ type: "range" })<
  SliderProps
>`
  ${inputStyle}
  position: absolute;
  &::-webkit-slider-thumb {
    position: relative;
    z-index: 2;
  }
  &::-moz-range-thumb {
    z-index: 2;
  }
`;

export const GhostInputStyled = styled.input.attrs({ type: "range" })<
  SliderProps
>`
    ${inputStyle}
    position: relative;
    background: ${(props: SliderProps): string => trackBackground(props)}
    &::-webkit-slider-runnable-track{
      background: ${(props: SliderProps): string => trackBackground(props)}
    }
    &::-moz-range-track {
      background: ${(props: SliderProps): string => trackBackground(props)}
    }
`;

export const SliderInputDot = styled.span`
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 5px;
  display: block;
  position: absolute;
  top: 2px;
  z-index: 3;
`;
