import React, { Component } from "react";
import PropTypes from "prop-types";
import ControlsActionButton from "./ControlsActionButton";

class Controls extends Component {
  render() {
    const {
      incrementLabel,
      decrementLabel,
      increment,
      decrement,
      reset,
      resetLabel,
      active,
    } = this.props;

    let map = {};
    document.addEventListener("keydown", function (e) {
      map[e.key] = true;
      if (map["Control"] && map["ArrowRight"] && active == true) {
        increment();
      }
      if (map["Control"] && map["ArrowLeft"] && active == true) {
        decrement();
      }
      if (map["Control"] && map["ArrowUp"] && active == true) {
        reset();
      }
    });

    document.addEventListener("keyup", function (e) {
      map[e.key] = false;
    });

    return (
      <div>
        <div className={active ? "controls" : "controls disabled"}>
          <ControlsActionButton label={incrementLabel} action={increment} />
          <ControlsActionButton label={resetLabel} action={reset} />
          <ControlsActionButton label={decrementLabel} action={decrement} />
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  decrement: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  active: PropTypes.bool,
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "Reset",
};

export default Controls;
