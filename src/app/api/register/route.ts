import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { users } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: Request) {
  try {
    const res = await request.json();
    console.log(res);

    if (
      !res.name ||
      !res.lastName ||
      !res.email ||
      !res.phone ||
      !res.password ||
      !res.address
    ) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" });
    } else if (res.password != res.repeatPassword) {
      return NextResponse.json({ error: "Las contraseñas deben coincidir" });
    }

    const hashedPassword = await bcrypt.hash(res.password, 10);

    const userData = { ...res, password: hashedPassword };

    const dbInsert = await db.insert(users).values(userData);
    const newId = parseInt(dbInsert.insertId);
    const newUser = await db.select().from(users).where(eq(users.id, newId));
    console.log(newUser);
    return NextResponse.json(newUser[0]);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
