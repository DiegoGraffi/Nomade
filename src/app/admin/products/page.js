import { db } from "@/lib/db";
import { products, cartItem } from "../../../../db/schema";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export default async function AdminProducts() {
  const allProducts = await db.select().from(products);

  async function deleteProduct(formData) {
    "use server";

    const id = formData.get("id");

    await db.delete(products).where(eq(products.id, id));
    await db.delete(cartItem).where(eq(cartItem.product_id, id));

    revalidatePath("/admin/products");
  }

  return (
    <section className="w-screen ">
      <ul>
        {allProducts.map((product) => (
          <li>
            {product.name}

            <form action={deleteProduct}>
              <input name="id" defaultValue={product.id} className="hidden" />
              <Button>Borrar</Button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}
