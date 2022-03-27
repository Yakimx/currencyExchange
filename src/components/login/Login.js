import React, { Fragment } from "react";
import { useContext } from "react/cjs/react.development";
import { Button } from "../button/Button";
import { RateContext } from "../../context/ratecontext";
import "./login.scss";

export const Login = () => {
  const { renderInputs, state, loginHandler } = useContext(RateContext);

  return (
    <Fragment>
      <div className="modalForm">{renderInputs()}</div>
      <div className="modalbtn">
        <Button
          text="Войти"
          disabled={!state.isFormValid}
          click={loginHandler}
        />
      </div>
    </Fragment>
  );
};
