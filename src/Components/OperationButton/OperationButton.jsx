import React from "react";
import { CalcButton } from "../../Styles/styles";
import { ACTIONS } from "../../App";

function OperationButton({ dispatch, operation }) {
  return (
    <CalcButton
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </CalcButton>
  );
}

export default OperationButton;
