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
  // .noUi-horizontal .noUi-tooltip {
  //   top: -115px;
  //   bottom: auto;
  //   &:after {
  //     content: "";
  //     border: 1px #aaaaaa solid;
  //   }
  // }
`;
