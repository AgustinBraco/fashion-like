import { createContext } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
};