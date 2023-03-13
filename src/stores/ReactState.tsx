import React, { useContext, useState } from "react";

import { User } from "./types";

export const StateContext = React.createContext<User[]>([]);
export const StateSetContext = React.createContext<(users: User[]) => void>(
  () => {}
);

interface Props {
  children: React.ReactElement;
}

export const StateProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <StateSetContext.Provider value={setUsers}>
      <StateContext.Provider value={users}>{children}</StateContext.Provider>
    </StateSetContext.Provider>
  );
};

export const useHandlers = () => {
  const set = useContext(StateSetContext);
  const users = useContext(StateContext);

  const fill = (count: number) => {
    const users = [];
    for (let i = 0; i < count; i++) {
      users[i] = {
        id: String(i),
        name: `User-${i}`,
        cnt: i
      };
    }

    set(users);
  };

  const inc = () => {
    for (const user of users) {
      user.cnt++;
    }

    set([...users]);
  };

  return { fill, inc };
};
