import { User } from "./types";

import { store } from "@risingstack/react-easy-state";

export const state = store({
  users: [] as User[],

  fill(count: number) {
    this.users = [];
    for (let i = 0; i < count; i++) {
      this.users[i] = {
        id: String(i),
        name: `User-${i}`,
        cnt: i
      };
    }
  },

  inc() {
    for (const user of this.users) {
      user.cnt++;
    }
  }
});
