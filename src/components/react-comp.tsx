import React, { useContext } from "react";

import { StateContext, StateProvider, useHandlers } from "../stores/ReactState";
import { User } from "../stores/types";
import { maxCount } from "./constants";

const UserComp = ({ user }: { user: User }) => {
  return (
    <div>
      {user.id}-{user.name}-{user.cnt}
    </div>
  );
};

const ReactComp = () => {
  const users = useContext(StateContext);
  const { fill, inc } = useHandlers();

  return (
    <div>
      <div onClick={() => fill(maxCount)}>fill</div>
      <div onClick={() => inc()}>inc</div>

      {users.map((user) => (
        <UserComp user={user} key={user.id} />
      ))}
    </div>
  );
};

const CompWithProvider = () => {
  return (
    <StateProvider>
      <ReactComp />
    </StateProvider>
  );
};

export default CompWithProvider;
