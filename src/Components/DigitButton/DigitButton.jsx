import React from "react";
import { CalcButton } from "../../Styles/styles";
import { ACTIONS } from "../../App";

function DigitButton({ dispatch, digit }) {
  return (
    <CalcButton
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </CalcButton>
  );
}

export default DigitButton;
