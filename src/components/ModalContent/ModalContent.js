import React from "react";
import ClipboardBtns from "../ClipboardBtns/ClipboardBtns";
import { ModalContentWrapper } from "./ModalContent.styles";

function ModalContent({ data }) {
  const generateSvg = (type, invert) => {
    if (type === "waves") {
      if (invert) {
        return /* html */ `
          <div class="custom-shape-divider">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        `;
      } else {
        return /* html */ `
          <div class="custom-shape-divider">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill"
                  ></path>
                </svg>
            </div>
        `;
      }
    }

    return <h1>Hello</h1>;
  };

  const generateCss = (data) => {
    return /* css */ `
                .custom-shape-divider {
                  position: absolute;
                  ${data.invert ? ` transform: rotate(180deg);` : ""}
                  ${
                    !data.position
                      ? `top: 0;`
                      : data.position && data.invert
                      ? `bottom: 0; transform: rotate(0deg);`
                      : `bottom: 0; transform: rotate(180deg);`
                  }
                  left: 0;
                  width: 100%;
                  overflow: hidden;
                  line-height: 0;
                }
                .custom-shape-divider svg {
                  position: relative;
                  display: block;
                  width: ${data.width}%;
                  height: ${data.height}px;
                  ${data.flip ? `transform: rotate(180deg);` : ""}
                }
                .custom-shape-divider .shape-fill {
                  fill: ${data.color};
                }`;
  };

  return (
    <ModalContentWrapper>
      <div className="container ">
        <div className="title text-center">
          <h3 className="font-bold">Get Code</h3>
        </div>
        <div className="code__area flex flex-col items-center justify-center mt-2">
          <h5 className="self-start">Html</h5>
          <p className="mt-2">
            Please put this html directly in your section wrapper element where
            you want to show <br /> shape divider. Note: That section wrapper
            element "position" property value must be set <br /> to "relative".
          </p>
          <div className="code mt-2">
            <code>{generateSvg(data.shape, data.invert)}</code>
          </div>
        </div>
        <div className="code__area flex flex-col items-center justify-center mt-2">
          <h5 className="self-start">CSS</h5>
          <p className="mt-2 self-start">
            Please put this CSS in your css file or html head.
          </p>
          <div className="code mt-2">
            <code>{generateCss(data)}</code>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <ClipboardBtns
            data={{
              html: generateSvg(data.shape, data.invert),
              css: generateCss(data),
            }}
          />
        </div>
      </div>
    </ModalContentWrapper>
  );
}

export default ModalContent;
