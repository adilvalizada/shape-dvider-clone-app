import React from "react";
import { HeaderWrapper } from "./Header.styles.js";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <HeaderWrapper className="pb-5 pt-3">
      <div className="github">
        <a href="https://github.com/adilvelizade0">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="container py-3">
        <div className=" flex flex-col items-center">
          <img width="84" className="bg-cover" src={logo} alt="logo" />
          <h1 className="text-white mt-3">Shape Divider Clone App</h1>
          <p className="text-white mt-3">
            We created this free tool to make it easier for designers and
            developers to export a beautiful SVG <br /> shape divider for their
            latest project. We hope you enjoy this tool.
          </p>
          <p className="text-white mt-3">
            Our Shape Dividers are premade SVG shapes that are not dynamic to
            the settings <br /> you use on the toolbar. Every Shape exported
            will come out as per it's original <br /> design and is manipulated
            via the code you export with it and implement into your web build.
          </p>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
