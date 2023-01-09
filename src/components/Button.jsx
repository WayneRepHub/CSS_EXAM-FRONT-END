import React from "react";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

//Universal function for Buttons
export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  //Calls the necessary scss style; otherwise set to primary style
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  //Same here but with sizes
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={"btn ${checkButtonStyles} ${checkButtonSize}"}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
