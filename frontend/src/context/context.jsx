import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {

  const [loginValue, setLoginValue] = useLocalStorage("login", false);
  const [adminValue, setAdminValue] = useLocalStorage("admin", false);
  const [tutorialDone, setTutorialDone] = useLocalStorage("tutorialDone", false);
  const [animationDone, setAnimationDone] = useSessionStorage("animationDone", false);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        return initialValue;
      };
    });

    const setValue = value => {
      try {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (err) {
        console.log("Catch error:", err)
      };
    };

    return [storedValue, setValue]
  };

  function useSessionStorage(key, initialValue) {
    const [sessionValue, setSessionValue] = useState(() => {
      try {
        const item = window.sessionStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        return initialValue;
      };
    });

    const setSValue = value => {
      try {
        setSessionValue(value)
        window.sessionStorage.setItem(key, JSON.stringify(value))
      } catch (err) {
        console.log("Catch error:", err)
      };
    };

    return [sessionValue, setSValue]
  };

  if (darkMode) {
    document.documentElement.style.setProperty('--color-first', '#262626');
    document.documentElement.style.setProperty('--color-second', '#4c4c4c');
    document.documentElement.style.setProperty('--color-third', '#717171');
    document.documentElement.style.setProperty('--color-fourth', '#979797');
    document.documentElement.style.setProperty('--color-black', '#FFFFFF');
    document.documentElement.style.setProperty('--color-white', '#000000');
  }
  else {
    document.documentElement.style.setProperty('--color-first', '#EEEEEE');
    document.documentElement.style.setProperty('--color-second', '#D5D0CD');
    document.documentElement.style.setProperty('--color-third', '#DFDBE0');
    document.documentElement.style.setProperty('--color-fourth', '#9F9D9D');
    document.documentElement.style.setProperty('--color-black', '#000000');
    document.documentElement.style.setProperty('--color-white', '#FFFFFF');
  }

  function toggleMode() {
    if (darkMode) setDarkMode(false);
    else setDarkMode(true);
  };

  return (
    <Context.Provider value={{useLocalStorage, useSessionStorage, toggleMode, darkMode, tutorialDone, setTutorialDone, animationDone, setAnimationDone, loginValue, setLoginValue, adminValue}}>
      {children}
    </Context.Provider>
  );
};