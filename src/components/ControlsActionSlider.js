import React from "react";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { sliderNum } from "../actions/counterActions";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
];

export default function ControlActionSlider(props) {
  const dispatch = useDispatch();

  function valuetext(value) {
    dispatch(sliderNum(value));
    return value;
  }

  return (
    <div className="slider">
      <Typography id="discrete-slider-custom" gutterBottom>
        Count Value
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={1}
        disabled={!props.active}
      />
    </div>
  );
}
