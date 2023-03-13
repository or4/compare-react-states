import { observer } from "mobx-react-lite";
import React from "react";

import { MstProvider } from "../stores/MstProvider";
import { useUserStore } from "../stores/mstStore";
import { User } from "../stores/types";
import { maxCount } from "./constants";

const UserComp = observer(({ user }: { user: User }) => {
  return (
    <div>
      {user.id}-{user.name}-{user.cnt}
    </div>
  );
});

const MstComp = observer(() => {
  const [state, store] = useUserStore();

  return (
    <div>
      <div onClick={() => store.fill(maxCount)}>fill</div>
      <div onClick={() => store.inc()}>inc</div>

      {state.users.map((user) => (
        <UserComp user={user} key={user.id} />
      ))}
    </div>
  );
});

const MstCompWithProvider = () => {
  return (
    <MstProvider>
      <MstComp />
    </MstProvider>
  );
};

export default MstCompWithProvider;
