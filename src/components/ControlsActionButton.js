import React from "react";

export default function ControlsActionButton(props) {
  return (
    <div
      onClick={() => {
        props.action();
      }}
    >
      <span>{props.label}</span>
    </div>
  );
}
