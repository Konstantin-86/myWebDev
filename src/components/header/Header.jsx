import ThemeToogle from "./Theme";

import "../../styles/components/header/header.scss";

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <a href="#" className="logo">
            <img className="header__logo" src={logo} alt="logo" />
          </a>
          <ul className="list">
            <li>
              <a className="list__link" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="list__link" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="list__link" href="#">
                WorkExperience
              </a>
            </li>
            <li>
              <a className="list__link" href="#">
                Contacts
              </a>
            </li>
          </ul>
          <div className="header__theme">
            <ThemeToogle />
          </div>
          <div className="header__burger">
            <span className="burger__line1"></span>
            <span className="burger__line2"></span>
            <span className="burger__line3"></span>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
