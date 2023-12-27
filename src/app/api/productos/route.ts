import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { products } from "../../../../db/schema";
import { eq, gte, lte, and, asc, desc, like } from "drizzle-orm";
import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const sort = searchParams.get("sort") ?? "asc";
  const allProducts = await db
    .select()
    .from(products)
    .where(
      and(
        minPrice ? gte(products.price, parseInt(minPrice)) : undefined,
        maxPrice ? lte(products.price, parseInt(maxPrice)) : undefined,
        search ? like(products.name, "%" + search + "%") : undefined
      )
    )
    .orderBy(sort === "asc" ? asc(products.price) : desc(products.price));
  return NextResponse.json(allProducts);
}

export async function POST(request: NextRequest) {
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
