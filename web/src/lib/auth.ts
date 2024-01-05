import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { db } from "./db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

const IRON_PASSWORD = "ay8txvcrUFXhV8mZB6769uGfcCoqqx2vJG5GCh7cKZ";

type IronSessionObject = {
  user_id?: number;
};

export function getSession() {
  return getIronSession<IronSessionObject>(cookies(), {
    password: IRON_PASSWORD,
    cookieName: "auth",
  });
}

type User = typeof users.$inferSelect;

export async function getLoggedInUser(): Promise<User | null> {
  const session = await getSession();
  if (session.user_id) {
    const dbUsers = await db
      .select()
      .from(users)
      .where(eq(users.id, session.user_id));
    if (dbUsers.length === 0) {
      return null;
    }
    return dbUsers[0];
  } else {
    return null;
  }
}
