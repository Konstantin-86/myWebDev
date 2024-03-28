import { useEffect, useState } from "react";
import { createContext } from "react";
import "../styles/main/App.css";
import Header from "./header/Header";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";

export const ThemeContext = createContext();

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      setCurrentTheme(true);
    }
  }, []);
  const ThemeDark = {
    color: "#312f2f",
    backgroundColor: "#c8c1c1",
    "--accentColor": "red",
    "--bgNeo": "#c8c1c1",
    "--shadow": "-5px 5px 10px #aaa4a4, 5px -5px 10px #e6dede",
    "--shadowHover": "inset -5px 5px 10px #aaa4a4, inset 5px -5px 10px #e6dede",
  };
  const ThemeLight = {
    color: "#c8c1c1",
    backgroundColor: "#312f2f",
    "--accentColor": "#1c37ce",
    "--bgNeo": "#312f2f",
    "--shadow": "-5px 5px 10px #2a2828, 5px -5px 10px #383636",
    "--shadowHover": "inset -5px 5px 10px #2a2828, inset 5px -5px 10px #383636",
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <div style={currentTheme ? ThemeDark : ThemeLight}>
        <Header />
        <Skills />
        <Portfolio />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
