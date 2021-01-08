import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { incrementNum, decrementNum } from "./../actions/counterActions";

export default function Toggle() {
  const [toggle, setToggle] = useState({ increment: false, decrement: false });
  const [increaseInterval, setIncreaseInterval] = useState(null);
  const [decreaseInterval, setDecreaseInterval] = useState(null);

  const dispatch = useDispatch();

  const incrementHandleChange = (event) => {
    setToggle({ increment: !toggle.increment, decrement: false });

    if (!toggle.increment) {
      setIncreaseInterval(setInterval(dispatchIncrement, 500));
      clearInterval(decreaseInterval);
    } else clearInterval(increaseInterval);
  };

  const decrementHandleChange = (event) => {
    setToggle({ increment: false, decrement: !toggle.decrement });

    if (!toggle.decrement) {
      setDecreaseInterval(setInterval(dispatchDecrement, 500));
      clearInterval(increaseInterval);
    } else clearInterval(decreaseInterval);
  };

  const dispatchIncrement = () => dispatch(incrementNum());
  const dispatchDecrement = () => dispatch(decrementNum());

  return (
    <div className="toggle-container">
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={toggle.increment}
              onChange={incrementHandleChange}
              name="increment"
              color="primary"
            />
          }
          label="Auto Increment"
        />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={toggle.decrement}
              onChange={decrementHandleChange}
              name="decrement"
            />
          }
          label="Auto Decrement"
        />
      </FormGroup>
    </div>
  );
}
