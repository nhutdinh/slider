import styled from "styled-components";

export const SliderStyled = styled.div`
  .noUi-horizontal .noUi-handle {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
  }
  .noUi-handle:before,
  .noUi-handle:after {
    display: none;
  }
  .noUi-horizontal {
    height: 5px;
  }
  .noUi-connect {
    background: red;
  }
  .noUi-marker-horizontal.noUi-marker {
    height: 100%;
    background: transparent;
    border-right: 1px #ccc dashed;
    bottom: 100%;
  }

  .noUi-value.noUi-value-horizontal.noUi-value-large {
    bottom: 220%;
  }

  .noUi-tooltip {
    white-space: normal;
  }
`;
