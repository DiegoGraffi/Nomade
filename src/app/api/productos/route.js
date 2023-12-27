import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request) {
  const productos = [
    {
      id: "1",
      name: "Remerita de boca",
      price: 15000,
    },
  ];
  return NextResponse.json(productos);
}
