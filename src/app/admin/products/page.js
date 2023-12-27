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
      <ul className="h-[70%] rounded-md overflow-y-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border p-2 w-full">
        {allProducts.length === 0 ? (
          <p className=" p-4">No hay productos para eliminar</p>
        ) : (
          allProducts.map((product) => (
            <li
              key={product.id}
              className="group p-4 border flex flex-col justify-between items-center gap-2 rounded-md m-2 hover:border-black transition-all ease-in-out duration-200"
            >
              <div className="relative w-[150px] h-[150px] aspect-square overflow-hidden rounded-md border">
                <Image
                  src={product.image}
                  fill
                  className="object-contain group-hover:scale-150 transition-all ease-in-out duration-200"
                />
              </div>
              <p className="text-sm text-center">{product.name}</p>
              <form action={deleteProduct} className="w-[50%]">
                <input name="id" defaultValue={product.id} className="hidden" />
                <Button className="border p-4 rounded-md bg-black text-white text-sm text-center hover:bg-accent hover:text-accent-foreground shadow-none w-full">
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
