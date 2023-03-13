import { makeAutoObservable, observable } from "mobx";
import React from "react";

import { User } from "./types";

interface State {
  users: User[];
}

export class UserStore {
  state: State = {
    users: []
  };

  constructor() {
    makeAutoObservable(this, { state: observable.deep }, { autoBind: true });
  }

  fill(count: number) {
    const users = [];
    for (let i = 0; i < count; i++) {
      users[i] = {
        id: String(i),
        name: `User-${i}`,
        cnt: i
      };
    }

    this.state.users = users;
  }

  inc() {
    for (const user of this.state.users) {
      user.cnt++;
    }
  }
}

type InferState<Store> = Store extends { state: unknown }
  ? Store["state"]
  : unknown;

export const createUseStore = <T extends { state: unknown } | undefined>(
  _StoreClass: new (...args: unknown[]) => T
) => {
  const Context = React.createContext(undefined as T);
  const useStore = () => {
    const store = React.useContext(Context);
    return [store?.state as InferState<T>, store] as const;
  };
  return [Context, useStore] as const;
};

export const [UserContext, useUserStore] = createUseStore(UserStore);
