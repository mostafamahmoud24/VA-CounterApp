import React from "react";
import Counter from "../containers/Counter";
import ControlActionSlider from "../components/ControlsActionSlider";
import ControlActionToggle from "./ControlsActionToggle";

export default function Container() {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <div className="col-6">
          <Counter active={true} counterType="counter" />
        </div>
        <div className="col-6">
          <Counter active={false} counterType="reverseCounter" />
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <ControlActionSlider />
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <ControlActionToggle />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
