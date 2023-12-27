import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { category } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const allCategories = await db.select().from(category);
  return NextResponse.json(allCategories);
}

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const dbInsert = await db.insert(category).values(res);
    const newId = parseInt(dbInsert.insertId);
    const newCategory = await db
      .select()
      .from(category)
      .where(eq(category.id, newId));

    return NextResponse.json(newCategory[0]);
  } catch (error) {
    console.log(error);
  }
}
