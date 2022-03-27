import React, { Fragment, useContext } from "react";
import { RateContext } from "../../context/ratecontext";
import { Button } from "../button/Button";
import "./register.scss";

export const Register = () => {
  const { renderInputs, state, registerHandler } = useContext(RateContext);

  return (
    <Fragment>
      <div className="modalForm">{renderInputs()}</div>
      <div className="modalbtn">
        <Button
          text="Зарегистрироваться"
          disabled={!state.isFormValid}
          click={registerHandler}
        />
      </div>
    </Fragment>
  );
};
