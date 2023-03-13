import React from "react";

import { state } from "./EasyStateStore";

interface Props {
  children: React.ReactElement;
}

export const EasyContext = React.createContext<typeof state>(state);

export const EasyStateProvider = ({ children }: Props) => {
  return <EasyContext.Provider value={state}>{children}</EasyContext.Provider>;
};
