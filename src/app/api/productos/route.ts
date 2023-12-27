import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { products } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const allProducts = await db.select().from(products);
  return NextResponse.json(allProducts);
}

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const dbInsert = await db.insert(products).values(res);
    const newId = parseInt(dbInsert.insertId);
    const newProduct = await db
      .select()
      .from(products)
      .where(eq(products.id, newId));
    return NextResponse.json(newProduct[0]);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
