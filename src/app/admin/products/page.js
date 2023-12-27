import { db } from "@/lib/db";
import { products, cartItem } from "../../../../db/schema";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import Image from "next/image";

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
    <section className="flex flex-col justify-center items-center w-screen min-h-screen h-[calc(100vh-30px)] container mx-auto">
      <p className="p-4 text-[64px]">Eliminar Productos</p>
      <ul className="h-[70%] rounded-md overflow-y-scroll grid grid-cols-2 border p-2  w-full">
        {allProducts.length === 0 ? (
          <p className=" p-4">No hay productos para eliminar</p>
        ) : (
          allProducts.map((product) => (
            <li
              key={product.id}
              className="group p-4 border flex flex-col justify-center items-center gap-2 rounded-md m-2 hover:border-black transition-all ease-in-out duration-200"
            >
              <div className="relative w-[150px] h-[150px] aspect-square overflow-hidden rounded-md border">
                <Image
                  src={product.image}
                  fill
                  className="object-contain group-hover:scale-150 transition-all ease-in-out duration-200"
                />
              </div>
              {product.name}

              <form action={deleteProduct}>
                <input name="id" defaultValue={product.id} className="hidden" />
                <Button className="bg-black hover:bg-neutral-700 transition-all ease-in-out duration-200">
                  Borrar
                </Button>
              </form>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
