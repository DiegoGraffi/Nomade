import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PiShoppingCartBold, PiHeartBold } from "react-icons/pi";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { cartItem, products } from "../../../../../db/schema";
import ProductView from "../../../../components/ProductView";
import { notFound, redirect } from "next/navigation";
import { getLoggedInUser } from "@/lib/auth";

export default async function ProductDetail({ params }) {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, params.id));

  if (product.length === 0) {
    notFound();
  }

  const { id, name, price, description, stock, image } = product[0];
  const productTitle = name || "Producto sin nombre";
  const productPrice = price || "Producto sin precio";
  const productDescription = description || "Producto sin descripción";
  const productStock = stock || "Consultar por el stock";

  const user = await getLoggedInUser();

  async function addToCart() {
    "use server";

    await db
      .insert(cartItem)
      .values({ user_id: user.id, product_id: id, quantity: 1 });

    redirect("/cart");
  }

  return (
    <div>
      <section className="w-screen min-h-screen ">
        <div className="container mx-auto ">
          <ProductView image={image} />

          <div className="w-full flex flex-col md:flex-row gap-[25px] md:mt-[25px]">
            <div className="w-full p-4">
              <div className="flex gap-[10px]">
                <Badge variant="secondary">Indumentaria</Badge>
                <Badge variant="secondary">Camperas</Badge>
              </div>
              <p className="mt-4 font-xs opacity-50 font-light ">
                stock: {productStock}
              </p>

              <p className="mt-2 font-semibold text-3xl">{productTitle}</p>
              <p className="mt-4 text-[36px]">${productPrice}</p>
            </div>
            <div className="w-full p-4  flex flex-col justify-end">
              {/* <div className="flex gap-[10px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Negro">Negro</SelectItem>
                    <SelectItem value="Gris">Gris</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Talle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                    <SelectItem value="xxl">XXL</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">01</SelectItem>
                    <SelectItem value="2">02</SelectItem>
                    <SelectItem value="3">03</SelectItem>
                    <SelectItem value="4">04</SelectItem>
                    <SelectItem value="5">05</SelectItem>
                    <SelectItem value="6">06</SelectItem>
                    <SelectItem value="7">07</SelectItem>
                    <SelectItem value="8">08</SelectItem>
                    <SelectItem value="9">09</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div className="flex gap-[10px] mt-[10px]">
                <Button
                  variant="secondary"
                  className="w-full gap-2 hover:bg-red-500 hover:text-white"
                >
                  <PiHeartBold />
                  Añadir a favoritos
                </Button>
                {user && (
                  <form action={addToCart}>
                    <Button
                      variant="secondary"
                      className="w-full gap-2 hover:bg-blue-500 hover:text-white"
                    >
                      <PiShoppingCartBold />
                      Añadir al carrito
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <Separator />

          <div className="w-full p-4">
            <p className="text-xl">Descripción</p>
            <div className="my-10 ">
              <p>{productDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
