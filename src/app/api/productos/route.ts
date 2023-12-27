import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const users = await db.query.products.findMany({});
  const productos = [
    {
      id: "1",
      name: "Remerita de boca",
      price: 15000,
    },
  ];
  return NextResponse.json(productos);
}
