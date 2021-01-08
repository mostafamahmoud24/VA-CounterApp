import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  render() {
    const { count, counterType } = this.props;

    let styles = { borderRadius: "5px" };
    let reverseStyles = { borderRadius: "5px" };

    //changing the counter background to shades of green (for positive values) or red (for negative values) depending on value
    if (count.counter == 0) {
      styles = {
        ...styles,
        background: `rgba(0,0,0,0)`,
      };
    } else if (count.counter > 0) {
      styles = {
        ...styles,
        background: `rgba(0,${50 + count.counter},0,1)`,
        color: "white",
      };
    } else {
      styles = {
        ...styles,
        background: `rgba(${50 + count.counter * -1},0,0,1)`,
        color: "white",
      };
    }

    //changing the reverse counter background to shades of green (for positive values) or red (for negative values) depending on value
    if (count.reverseCounter == 0) {
      reverseStyles = {
        ...reverseStyles,
        background: `rgba(0,0,0,0)`,
      };
    } else if (count.reverseCounter > 0) {
      reverseStyles = {
        ...reverseStyles,
        background: `rgba(0,${50 + count.reverseCounter},0,1)`,
        color: "white",
      };
    } else {
      reverseStyles = {
        ...reverseStyles,
        background: `rgba(${50 + count.reverseCounter * -1},0,0,1)`,
        color: "white",
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
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
