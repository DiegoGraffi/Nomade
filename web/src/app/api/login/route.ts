import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { users } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import { getSession } from "@/lib/auth";
import bcrypt from "bcrypt";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  try {
    const res = await request.json();
    console.log(res);

    if (!res.email || !res.password) {
      console.log("todos los campos son obligatorios");
      return NextResponse.json({ error: "Todos los campos son obligatorios" });
    }

    const dbUsers = await db
      .select()
      .from(users)
      .where(eq(users.email, res.email));
    if (dbUsers.length === 0) {
      console.log("No se encontró");
      return NextResponse.json({
        error: "No se encontró el mail en nuestra base de datos",
      });
    }

    const user = dbUsers[0];

    const passwordMatch = await bcrypt.compare(res.password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Las contraseña no es correcta" });
    }

    const session = await getSession();
    session.user_id = user.id;
    await session.save();

    return NextResponse.json({ auth: true });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
