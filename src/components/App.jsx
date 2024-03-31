import { useEffect, useState } from "react";
import { createContext } from "react";

import Portfolio from "./portfolio/Portfolio";
import "../styles/main/App.css";

import Contacts from "./contacts/Contacts";
import Header from "./header/Header";
import Preload from "./preloader/Preload";
import Skills from "./skills/Skills";
import Work from "./work/Work";

export const ThemeContext = createContext();

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [burgerHadler, setBurgerHandler] = useState(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setCurrentTheme("dark");
    }
  }, []);
  const ThemeLight = {
    color: "#312f2f",
    backgroundColor: "#f5f0f0",
    "--accentColor": "#b49463",
    "--bgNeo": "#f5f0f0",
    "--shadow": "-5px 5px 10px #aaa4a4, 5px -5px 10px #e6dede",
    "--shadowHover": "inset -5px 5px 10px #d0cccc, inset 5px -5px 10px #ffffff",
  };
  const ThemeDark = {
    color: "#c8c1c1",
    backgroundColor: "#312f2f",
    "--accentColor": "#2e6d9c",
    "--bgNeo": "#312f2f",
    "--shadow": "-5px 5px 10px #2a2828, 5px -5px 10px #383636",
    "--shadowHover": "inset -5px 5px 10px #2a2828, inset 5px -5px 10px #383636",
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setCurrentTheme, burgerHadler, setBurgerHandler }}
    >
      {load ? (
        <Preload />
      ) : (
        <div style={currentTheme === "light" ? ThemeLight : ThemeDark}>
          <Header />
          <Skills />
          <Portfolio />
          <Work />
          <Contacts />
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
