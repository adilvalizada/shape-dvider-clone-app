import styled from "styled-components";

const OptionsWrapper = styled.div`
  max-width: 48rem;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border-radius: 0.5rem;
  margin-top: -40px;
  box-shadow: 11px 0 38px 0 rgba(0, 0, 0, 0.1);

  button {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    outline: 0;
    width: 65px;
    height: 65px;
    padding-left: 19px;
    padding-right: 19px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;

    i {
      color: #fb4b1a;
      font-size: 25px;
    }
  }

  label {
    font-family: "Quicksand", sans-serif;
  }

  select {
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
  }

  input#color {
    height: 35px;
    background-color: #ececec;
  }

  .rc-slider-handle {
    width: 18px;
    height: 18px;
    border-color: #fb4b1a;
    border-width: 4px;
  }
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #fb4b1a;
    box-shadow: none;
  }
`;

export { OptionsWrapper };
