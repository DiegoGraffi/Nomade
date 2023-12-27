import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("obteniendo usuario");
}

export function DELETE() {
  return NextResponse.json("eliminando usuario");
}

export function PUT() {
  return NextResponse.json("actualizando usuario");
}
