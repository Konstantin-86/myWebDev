import { useContext } from "react";
import { ThemeContext } from "../App";

import ThemeToogle from "./Theme";
import "../../styles/components/header/header.scss";

import logo from "../../images/logo.png";
import Burger from "./Burger";

const Header = () => {
  const { burgerHadler, setBurgerHandler } = useContext(ThemeContext);
  const checkWidth = () => {
    if (window.innerWidth < 768) {
      setBurgerHandler(!burgerHadler);
    }
  };
  return (
    <>
      <div className="container">
        <header className="header">
          <a href="#" className="logo">
            <img className="header__logo" src={logo} alt="logo" />
          </a>
          <ul className={burgerHadler ? "list" : "list--active"}>
            <li onClick={checkWidth}>
              <a className="list__link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li onClick={checkWidth}>
              <a className="list__link" href="#workExperience">
                WorkExperience
              </a>
            </li>
            <li onClick={checkWidth}>
              <a className="list__link" href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
          <div className="header__theme">
            <ThemeToogle />
          </div>
          <Burger />
        </header>
      </div>
    </>
  );
};
export default Header;
