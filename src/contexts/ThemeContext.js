import { createContext, useEffect, useState } from "react";
import React from "react";
import { updateLocalStorage } from "../utils/utils";


const ThemeContext = createContext({});
const ThemeContextProvider = (props) => {
  const mode = localStorage.getItem("mode");
  const [theme, setTheme] = useState(() => {
    return mode ? mode : "light";
  });

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    updateLocalStorage("mode", theme);
    theme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  });
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider, ThemeContext };
