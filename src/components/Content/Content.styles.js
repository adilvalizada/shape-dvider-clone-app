import styled from "styled-components";

const ContentWrapper = styled.div`
  .window {
    .window__area {
      background-image: linear-gradient(
        45deg,
        hsl(240deg 100% 20%) 0%,
        hsl(289deg 100% 21%) 11%,
        hsl(315deg 100% 27%) 22%,
        hsl(329deg 100% 36%) 33%,
        hsl(337deg 100% 43%) 44%,
        hsl(357deg 91% 59%) 56%,
        hsl(17deg 100% 59%) 67%,
        hsl(34deg 100% 53%) 78%,
        hsl(45deg 100% 50%) 89%,
        hsl(55deg 100% 50%) 100%
      );
      z-index: -1;
      height: 666px;
      border-radius: 0 0 10px 10px;
      position: relative;

      .custom-shape-divider {
        position: absolute;

        ${({ data }) => {
          if (data.invert) {
            return ` transform: rotate(180deg);`;
          }
        }}

        ${({ data }) => {
          if (!data.position) {
            return `top: 0;`;
          } else if (data.position && data.invert) {
            return `bottom: 0;
            transform: rotate(0deg);
              `;
          } else {
            return `bottom: 0;
            transform: rotate(180deg);
              `;
          }
        }}
        
        

        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
      }

      .custom-shape-divider svg {
        position: relative;
        display: block;
        width: ${(props) => props.data.width}%;
        height: ${(props) => props.data.height}px;
        ${({ data }) => {
          if (data.flip) {
            return `transform: rotateY(180deg);`;
          }
        }}
      }

      .custom-shape-divider .shape-fill {
        fill: ${(props) => props.data.color};
      }
    }
  }
`;

export { ContentWrapper };
