import { useContext } from "react";
import { ThemeContext } from "../App";

import "../../styles/components/header/theme.scss";

const ThemeToogle = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const curTheme = () => {
    console.log(`currentTheme in Theme ${currentTheme}`);
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    }
    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  };
  console.log(localStorage.getItem("theme"));
  return (
    <div className="header__swither" onClick={curTheme}>
      <svg
        className="switchSvg"
        fill={currentTheme === "dark" ? "#fff" : "#000"}
        height="30px"
        width="30px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 461.977 461.977"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M398.47,248.268L346.376,18.543C344.136,8.665,333.287,0,323.158,0H138.821c-10.129,0-20.979,8.665-23.219,18.543
		L63.507,248.268c-0.902,3.979-0.271,7.582,1.775,10.145c2.047,2.564,5.421,3.975,9.501,3.975h51.822v39.108
		c-6.551,3.555-11,10.493-11,18.47c0,11.598,9.402,21,21,21c11.598,0,21-9.402,21-21c0-7.978-4.449-14.916-11-18.47v-39.108h240.587
		c4.079,0,7.454-1.412,9.501-3.975C398.742,255.849,399.372,252.247,398.47,248.268z"
          />
          <path
            d="M318.735,441.977h-77.747V282.388h-20v159.588h-77.747c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h175.494
		c5.522,0,10-4.477,10-10C328.735,446.454,324.257,441.977,318.735,441.977z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ThemeToogle;
