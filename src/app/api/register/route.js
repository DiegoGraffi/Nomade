import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("cuentas");
}

export function POST() {
  return NextResponse.json("creando usuario");
}
