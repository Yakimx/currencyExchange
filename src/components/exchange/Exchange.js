import React, { useContext } from "react";
import { RateContext } from "../../context/ratecontext";
import "./exchange.scss";

export const Exchange = () => {
  const { state } = useContext(RateContext);
  const currency = { ...state.currency };
  
  return (
    <div className="Exchange">
      <div className="exchangeContainer">
        <div className="exchangeContent">
          <div>
            <p>
              Базовая валюта: &nbsp;{state.base} &nbsp;Дата обновления:{state.date}
            </p>
          </div>
          <ul>
            {Object.keys(currency).map((item) => {
              return (
                <li key={item}>
                  <span>
                    <img src={currency[item].flag} alt={item} />
                    {item}
                  </span>
                  <span>{`1${state.base} = ${currency[item].course} ${item}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
