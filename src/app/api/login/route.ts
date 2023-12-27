import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { users } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import { getIronSession } from "iron-session";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

//pasos
// 1 - validar email y contraseña
// 2 - buscar un usuario en la db con el email (si no existe putearlo)
// 3 - validar que la contraseña de la db y la contraseña del json sean iguales (caso que no putearlo)
// 4 - logeado master (te mandamos un token)
// https://github.com/vvo/iron-session

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
      // no lo encontramos putear
      console.log("No se encontró");
      return NextResponse.json({
        error: "No se encontró el mail en nuestra base de datos",
      });
    }

    const user = dbUsers[0];

    if (user.password !== res.password) {
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
