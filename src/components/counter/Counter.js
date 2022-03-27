import React, { useContext } from "react";
import { RateContext } from "../../context/ratecontext";
import { Button } from "../button/Button";
import "./counter.scss";

export const Counter = () => {
  const { state, inputValueHandler, currencyValueHandler, calculatorHandler } =
    useContext(RateContext);

  return (
    <div className="calcHead">
      <div>
        <h4>Я хочу обменять:</h4>
      </div>
      <div className="operation">
        <span>
          <input
            type="number"
            value={state.inputValue}
            onChange={inputValueHandler}
          />
          &nbsp; USD
        </span>
        <select onChange={currencyValueHandler}>
          {Object.keys(state.currency).map((item) => {
            return <option key={item}> {item}</option>;
          })}
        </select>
        <Button
          text="Посчитать"
          click={calculatorHandler}
          arg={state.currencyValue}
        />

      </div>
    </div>
  );
};
