import styled from "styled-components";
import { SliderProps } from "./Slider";

const inputStyle = `padding: 0;
margin: 0;
display: inline-block;
vertical-align: top;`;
const trackBackground = (props: SliderProps) => `linear-gradient(
    to right,
    transparent ${100 *
      ((Math.min(props.lowValue, props.highValue) - 0) / (100 - 0)) +
      1 +
      "%"},
    hsl(190, 80%, 40%) 0,
    hsl(190, 80%, 40%) ${100 *
      ((Math.max(props.lowValue, props.highValue) - 0) / (100 - 0)) -
      1 +
      "%"},
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
