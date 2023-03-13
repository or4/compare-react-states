import React, { useContext } from "react";

import { EasyContext, EasyStateProvider } from "../stores/EasyStateProvider";
import { User } from "../stores/types";
import { maxCount } from "./constants";

import { view } from "@risingstack/react-easy-state";

const UserComp = view(({ user }: { user: User }) => {
  return (
    <div>
      {user.id}-{user.name}-{user.cnt}
    </div>
  );
});

const EasyComp = view(() => {
  const store = useContext(EasyContext);

  return (
    <div>
      <div onClick={() => store.fill(maxCount)}>fill</div>
      <div onClick={() => store.inc()}>inc</div>

      {store.users.map((user) => (
        <UserComp user={user} key={user.id} />
      ))}
    </div>
  );
});

const EasyCompWithProvider = () => {
  return (
    <EasyStateProvider>
      <EasyComp />
    </EasyStateProvider>
  );
};

export default EasyCompWithProvider;
