import React, { useContext } from "react";
import "./countResult.scss";
import { RateContext } from "../../context/ratecontext";

export const CountResult = () => {
  const { state } = useContext(RateContext);

  return (
    <div className="calcResult">
      <ul>
        {state.result ? (
          <li>
            <p>
              <span>{state.inputValue}&nbsp;USD</span>=
              <span>
                {state.result}&nbsp;{state.currencyValue}
              </span>
            </p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};
