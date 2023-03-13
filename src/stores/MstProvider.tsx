import React, { useState } from "react";

import { UserContext, UserStore } from "./mstStore";

interface Props {
  children: React.ReactElement;
}

export const MstProvider = ({ children }: Props) => {
  const [userStore] = useState(() => new UserStore());

  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
};
