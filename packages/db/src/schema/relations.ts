import { defineRelations } from "drizzle-orm";
import { account, session, twoFactor, user } from "./auth";

export const relations = defineRelations(
  {
    user,
    session,
    account,
    twoFactor,
  },
  (r) => ({
    user: {
      sessions: r.many.session(),
      accounts: r.many.account(),
      twoFactors: r.many.twoFactor(),
    },
    session: {
      user: r.one.user({ from: r.session.userId, to: r.user.id }),
    },
    account: {
      user: r.one.user({ from: r.account.userId, to: r.user.id }),
    },
    twoFactor: {
      user: r.one.user({ from: r.twoFactor.userId, to: r.user.id }),
    },
  }),
);
