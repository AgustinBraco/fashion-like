import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {

  const [loginValue, setLoginValue] = useLocalStorage("login", false);
  const [adminValue, setAdminValue] = useLocalStorage("admin", false);

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

  return (
    <Context.Provider value={{useLocalStorage, useSessionStorage, loginValue, adminValue}}>
      {children}
    </Context.Provider>
  );
};