import React, { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useDispatch, useSelector } from "react-redux";
import { incrementNum, decrementNum } from "./../actions/counterActions";

export default function Toggle(props) {
  const [toggle, setToggle] = useState({ increment: false, decrement: false });
  const [increaseInterval, setIncreaseInterval] = useState(null);
  const [decreaseInterval, setDecreaseInterval] = useState(null);

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.count);

  useEffect(() => {
    if (counter.modalIsOpen) {
      setToggle({ increment: false, decrement: false });
      clearInterval(decreaseInterval);
    }
  }, [counter]);

  const incrementHandleChange = () => {
    setToggle({ increment: !toggle.increment, decrement: false });

    if (!toggle.increment) {
      setIncreaseInterval(setInterval(dispatchIncrement, 500));
      clearInterval(decreaseInterval);
    } else clearInterval(increaseInterval);
  };

  const decrementHandleChange = () => {
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
              disabled={!props.active}
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
              disabled={!props.active}
            />
          }
          label="Auto Decrement"
        />
      </FormGroup>
    </div>
  );
}
