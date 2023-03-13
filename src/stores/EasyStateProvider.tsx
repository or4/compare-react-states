import React from "react";

import { state } from "./EasyStateStore";

interface Props {
  children: React.ReactElement;
}

export const GlobalContext = React.createContext<typeof state>(state);

export const EasyStateProvider = ({ children }: Props) => {
  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
