import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request, { params }) {
  const id = params.id;

  return NextResponse.json({ message: "Tu id es " + id });
}
