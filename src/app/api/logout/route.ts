import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getSession();

  session.destroy();

  return NextResponse.json({ message: "logged out" });
}
