import React, { useEffect, useState } from "react";
import { OptionsWrapper } from "./Options.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-switch";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReactTooltip from "react-tooltip";

function Options({ data, updateData }) {
  const [flipChecked, setFlipChecked] = useState(data.flip);
  const [invertChecked, setInvertChecked] = useState(data.invert);
  const [positionChecked, setPositionChecked] = useState(data.position);
  const [height, setHeight] = useState(data.height);
  const [width, setWidth] = useState(data.width);
  const [color, setColor] = useState(data.color);
  const [shape, setShape] = useState(data.shape);

  const flipHandleChange = () => {
    setFlipChecked(!flipChecked);
  };

  const invertHandleChange = () => {
    setInvertChecked(!invertChecked);
  };

  const positionHandleChange = () => {
    setPositionChecked(!positionChecked);
  };

  const colorHandleChange = (e) => {
    setColor(e.target.value);
  };

  const shapeHandleChange = (e) => {
    setShape(e.target.value);
  };

  const heightHandleChange = (val) => {
    setHeight(val);
  };

  const widthHandleChange = (val) => {
    setWidth(val);
  };

  useEffect(() => {
    updateData({
      flip: flipChecked,
      invert: invertChecked,
      position: positionChecked,
      color: color,
      shape: shape,
      height: height,
      width: width,
    });
  }, [
    flipChecked,
    invertChecked,
    positionChecked,
    height,
    width,
    color,
    shape,
  ]);

  return (
    <OptionsWrapper className="mx-3 mx-md-auto ">
      <div className="row justify-content-center py-3">
        <div className="col-11 col-lg-2 ">
          <label className="font-bold text-lg" htmlFor="shape">
            Shape
          </label>
          <div className="text-xs text-gray-500">Select your style</div>
          <select
            value={shape}
            onChange={shapeHandleChange}
            className="mt-3 form-select"
            name="shape"
            id="shape"
          >
            <option value="waves">Waves</option>
          </select>
        </div>

        <div className="col-11 col-md-6 col-lg-2 mt-3 mt-lg-0">
          <label className="font-bold text-lg" htmlFor="color">
            Color
          </label>
          <div className="text-xs text-gray-500">Pick any color</div>
          <input
            name="color"
            id="color"
            value={color}
            className="mt-3 form-control"
            type="color"
            onChange={colorHandleChange}
          />
        </div>

        <div className="col-11 col-md-5 col-lg-2 mt-3 mt-lg-0">
          <label className="font-bold text-lg" htmlFor="flip">
            Flip
          </label>
          <div className="text-xs text-gray-500">Flip Horizontally</div>
          <Switch
            id="flip"
            name="flip"
            className="mt-3"
            checked={flipChecked}
            onChange={() => flipHandleChange()}
            onColor="#fb4b1a"
            offColor="#fb4b1a"
            height={35}
            width={75}
            handleDiameter={25}
            checkedIcon={
              <div className="flex justify-center pt-1">
                <p className="text-white font-bold">Yes</p>
              </div>
            }
            uncheckedIcon={
              <div className="flex justify-center pt-1 pe-1">
                <p className="text-white font-bold">No</p>
              </div>
            }
            borderRadius={10}
          />
        </div>

        <div className="col-11 col-md-6 col-lg-2 mt-3 mt-lg-0">
          <label className="font-bold text-lg" htmlFor="invert">
            Invert
          </label>
          <div className="text-xs text-gray-500">Invert</div>
          <Switch
            id="invert"
            name="invert"
            className="mt-3"
            checked={invertChecked}
            onChange={() => invertHandleChange()}
            onColor="#fb4b1a"
            offColor="#fb4b1a"
            height={35}
            width={75}
            handleDiameter={25}
            checkedIcon={
              <div className="flex justify-center pt-1">
                <p className="text-white font-bold">Yes</p>
              </div>
            }
            uncheckedIcon={
              <div className="flex justify-center pt-1 pe-1">
                <p className="text-white font-bold">No</p>
              </div>
            }
            borderRadius={10}
          />
        </div>

        <div className="col-11 col-md-5 col-lg-3 mt-3 mt-lg-0">
          <label className="font-bold text-lg" htmlFor="top-bottom">
            Top/bottom
          </label>
          <div className="text-xs text-gray-500">Top or bottom divider?</div>
          <Switch
            id="top-bottom"
            name="top-bottom"
            className="mt-3"
            checked={positionChecked}
            onChange={() => positionHandleChange()}
            onColor="#fb4b1a"
            offColor="#fb4b1a"
            height={35}
            width={100}
            handleDiameter={25}
            checkedIcon={
              <div className="flex justify-center pt-1 ps-4">
                <p className="text-white font-bold">Bottom</p>
              </div>
            }
            uncheckedIcon={
              <div className="flex justify-center pt-1 pe-4">
                <p className="text-white font-bold ">Top</p>
              </div>
            }
            borderRadius={10}
          />
        </div>
      </div>
      <div className="row justify-content-center pb-5">
        <div className="col-11 col-lg-6 mt-3 mt-lg-0">
          <label className="font-bold text-lg" htmlFor="height">
            Height
          </label>
          <div className="flex justify-between mt-3">
            <p className="text-xs text-gray-500">0px</p>
            <p className="text-xs text-gray-500">500px</p>
          </div>
          <div data-tip={height} data-for="height">
            <Slider
              min={0}
              max={500}
              trackStyle={{ backgroundColor: "#fb4b1a", height: "8px" }}
              railStyle={{ height: "8px" }}
              value={height}
              onChange={(val) => heightHandleChange(val)}
            />
          </div>
          <ReactTooltip id="height" />
        </div>
        <div className="col-11 col-lg-5 mt-3 mt-lg-0">
          <label className="font-bold text-lg" htmlFor="width">
            Width
          </label>
          <div className="flex justify-between mt-3">
            <p className="text-xs text-gray-500">100%</p>
            <p className="text-xs text-gray-500">300%</p>
          </div>
          <div data-tip={width} data-for="width">
            <Slider
              min={100}
              max={300}
              value={width}
              onChange={(val) => widthHandleChange(val)}
              trackStyle={{ backgroundColor: "#fb4b1a", height: "8px" }}
              railStyle={{ height: "8px" }}
            />
          </div>
          <ReactTooltip id="width" />
        </div>
      </div>
      <button className="shadow flex justify-center items-center">
        <i class="fa-solid fa-cloud-arrow-down"></i>
      </button>
    </OptionsWrapper>
  );
}

export default Options;
