import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
  render() {
    const { count, active, counterType } = this.props;

    let styles = { borderRadius: "5px" };
    let reverseStyles = { borderRadius: "5px" };

    if (count.counter == 0) {
      styles = {
        ...styles,
        background: `rgba(0,0,0,0)`,
      };
      reverseStyles = styles;
    } else if (count.counter < 0) {
      styles = {
        ...styles,
        background: `rgba(${155 + count.counter},0,0,1)`,
      };
      reverseStyles = {
        ...styles,
        background: `rgba(0,${155 + count.reverseCounter * -1},0,1)`,
      };
    } else {
      styles = {
        ...styles,
        background: `rgba(0,${155 + count.counter},0,1)`,
      };
      reverseStyles = {
        ...styles,
        background: `rgba(${155 + count.counter},0,0,1)`,
      };
    }

    return (
      <div className="counter">
        <div
          style={
            counterType == "counter" ? { ...styles } : { ...reverseStyles }
          }
        >
          {counterType == "counter" ? count.counter : count.reverseCounter}
        </div>
        <Controls active={active} />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
