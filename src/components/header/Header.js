import React from "react";
import { useContext } from "react/cjs/react.development";
import { RateContext } from "../../context/ratecontext";
import { Navbar } from "../navbar/Navbar";
import "./header.scss";

export const Header = () => {
  const { modalShowHandler } = useContext(RateContext);

  return (
    <div className="header">
      <div className="headerWrap">
        <div className="logo">
          <a href="./">
            <h2>RateApp</h2>
          </a>
        </div>
        <Navbar />
        <div className="person">
          <i
            className="fa fa-user"
            aria-hidden="true"
            onClick={modalShowHandler}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
