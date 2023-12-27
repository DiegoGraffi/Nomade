import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { products } from "../../../../../db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const allProducts = await db
    .select()
    .from(products)
    .where(eq(products.id, id));

  return NextResponse.json(allProducts[0]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const values = await request.json();

  // primero lo actualizamos en la db
  await db.update(products).set(values).where(eq(products.id, id));

  // y pedimos el producto previamenta actualizado
  const allProducts = await db
    .select()
    .from(products)
    .where(eq(products.id, id));

  return NextResponse.json(allProducts[0]);
}
