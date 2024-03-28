import { useContext } from "react";
import { ThemeContext } from "../App";
import "@theme-toggles/react/css/Lightbulb.css";
import { Lightbulb } from "@theme-toggles/react";

import "../../styles/components/header/theme.scss";

const ThemeToogle = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const curTheme = () => {
    if (currentTheme) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setCurrentTheme(!currentTheme);
  };
  return (
    <div className="header__swither" onClick={curTheme}>
      <Lightbulb duration={750} />
    </div>
  );
};

export default ThemeToogle;
