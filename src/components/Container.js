import React from "react";
import Counter from "../containers/Counter";
import Controls from "../containers/Controls";
import ControlActionSlider from "../components/ControlsActionSlider";
import ControlActionToggle from "./ControlsActionToggle";
import CollapsibleContainer from "./CollapsibleContainer";

export default function Container(props) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="counter">
          <Counter counterType={props.counterType} />
          <CollapsibleContainer>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <Controls active={props.active} />
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <ControlActionSlider active={props.active} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <ControlActionToggle active={props.active} />
              </div>
            </div>
          </CollapsibleContainer>
        </div>
      </div>
    </div>
  );
}
