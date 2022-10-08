import { createContext, useEffect, useState } from "react";
import React from "react";
const Context  = createContext({});
const ContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const toggle = () => {
    setTheme(prevState => prevState === "dark" ? "light" : "dark")
    if(theme==="dark")document.body.classList.add("dark");
    else document.body.classList.remove("dark");
}
return (
    <Context.Provider value={{theme,toggle}}>
        {props.children}
    </Context.Provider>
)
}
export   {ContextProvider, Context}
