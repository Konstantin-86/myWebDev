import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import burgerClose from "../../images/burger.png";

import "../../styles/components/header/burger.scss";

const Burger = () => {
  const { burgerHadler, setBurgerHandler } = useContext(ThemeContext);
  return (
    <>
      <div
        className="burger__inner"
        onClick={() => setBurgerHandler(!burgerHadler)}
      >
        {burgerHadler ? (
          <img src={burgerClose} alt="burgerClose" />
        ) : (
          <div className="burger--open">
            <p className="burgerLine1"></p>
            <p className="burgerLine2"></p>
          </div>
        )}
      </div>
    </>
  );
};

export default Burger;
