import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {

  const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };

  const loginValue = getJSON("login");
  const adminValue = getJSON("admin");

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

  return (
    <Context.Provider value={{useLocalStorage, loginValue, adminValue, getJSON}}>
      {children}
    </Context.Provider>
  );
};