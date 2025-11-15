// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Session, User } from "$lib/server/database";

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      session?: {
        session: {
          id: string;
          userId: string;
          expiresAt: Date;
          createdAt: Date;
          updatedAt: Date;
          token: string;
          ipAddress?: string | null | undefined | undefined;
          userAgent?: string | null | undefined | undefined;
        };
        user: {
          id: string;
          email: string;
          emailVerified: boolean;
          name: string;
          createdAt: Date;
          updatedAt: Date;
          image?: string | null | undefined | undefined;
        };
      } | null;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  var $client: RouterClient<typeof router> | undefined;
  interface Window {
    dehydrated: DehydratedState;
  }
}
