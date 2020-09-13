import React from "react";
import "./MonitorBackdrop.scss";

export const MonitorBackdrop = () => {
  return (
    <div className="bg-wrapper">
      <div className="screen-bg-wrapper">
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
        <div className="left"></div>
      </div>
      <div className="conslole-bg-wrapper">
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
        <div className="left"></div>
      </div>
    </div>
  );
};
