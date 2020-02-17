import styled from "styled-components";
import { SliderProps } from "./Slider";

const inputStyle = `padding: 0;
margin: 0;
display: inline-block;
vertical-align: top;`;
const trackBackground = (props: SliderProps) => `linear-gradient(
    to right,
    transparent ${props.lowValue + "%"},
    hsl(190, 80%, 40%) 0,
    hsl(190, 80%, 40%) ${props.highValue + "%"},
    transparent 0
  );`;
export const OriginalInputStyled = styled.div<SliderProps>`
  input {
    ${inputStyle}
    position: absolute;
  }
`;

export const GhostInputStyled = styled.div<SliderProps>`
  input{
    ${inputStyle}
    position: relative;
    background: ${(props: SliderProps): string => trackBackground(props)}
    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      background: red;
    }
    &::-webkit-slider-thumb {
      position: relative;
      z-index: 2;
    }
    &::-moz-range-thumb {
      z-index: 2;
    }
  
  }
  
`;
