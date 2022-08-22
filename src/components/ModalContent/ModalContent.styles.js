import styled from "styled-components";

const ModalContentWrapper = styled.div`
  .title {
    h3 {
      font-family: "Quicksand", sans-serif;
    }
  }

  .code__area {
    p {
      font-family: "Quicksand", sans-serif;
      color: #fb4b1a;
    }
    .code {
      width: 650px;
      height: 150px;
      background-color: #000;
      overflow: hidden;
      color: #fff;
      border-radius: 5px;
      padding: 20px;
      overflow: scroll;
    }
  }

  button {
    color: #fff;
    font-size: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    outline: 0;
    font-weight: 700;
    background: #fb4b1a;
    font-family: "Quicksand", sans-serif;
  }
`;

export { ModalContentWrapper };
