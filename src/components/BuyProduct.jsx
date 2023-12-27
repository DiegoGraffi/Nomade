import Image from "next/image";
import React from "react";
import { PiPlusCircle, PiMinusCircle, PiTrash } from "react-icons/pi";
import { cartItem, products } from "../../db/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { Button } from "./ui/button";
import { formatPrice } from "@/lib/formatter";
import placeholder from "../../public/images/placeholder-image.png";

async function BuyProduct(props) {
  const { item } = props;
  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.id, props.item.product_id));

  async function addOne() {
    "use server";
    await db
      .update(cartItem)
      .set({ quantity: item.quantity + 1 })
      .where(eq(cartItem.id, item.id));

    revalidatePath("/cart");
  }

  async function removeOne() {
    "use server";
    await db
      .update(cartItem)
      .set({ quantity: item.quantity - 1 })
      .where(eq(cartItem.id, item.id));

    revalidatePath("/cart");
  }

  async function deleteItem() {
    "use server";
    await db.delete(cartItem).where(eq(cartItem.id, item.id));

    revalidatePath("/cart");
  }

  return (
    <div>
      <div className="hidden w-full p-4 md:grid grid-cols-[2fr,1fr,1fr,.5fr] items-center hover:bg-slate-50">
        <div className="flex flex-row gap-2 justify-start items-center ">
          <div className="group min-w-[120px] max-w-[150px] h-[150px] relative border rounded-md bg-white overflow-hidden">
            <Image
              src={product.image ? product.image : placeholder}
              fill
              className="object-contain rounded-md p-2 group-hover:scale-[2] transition-all ease-in-out duration-200"
            />
          </div>
          <p>{product.name}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-1 w-full justify-around items-center py-2 ">
          <div className="cursor-pointer">
            <form action={removeOne}>
              <Button className="bg-white border shadow-none hover:bg-slate-200 transition-all ease-in-out duration-150">
                <PiMinusCircle size={15} className="opacity-100 text-black" />
              </Button>
            </form>
          </div>
          <div>
            <p className="font-light text-sm md:font-medium md:text-base">
              {item.quantity}
            </p>
          </div>
          <div className="cursor-pointer">
            <form action={addOne}>
              <Button className="bg-white border shadow-none hover:bg-slate-200 transition-all ease-in-out duration-150">
                <PiPlusCircle size={15} className="opacity-100 text-black" />
              </Button>
            </form>
          </div>
        </div>

        <div className="w-full md:flex items-center justify-center hidden">
          <p className="font-ligth text-sm md:font-medium md:text-base">
            {formatPrice(product.price * item.quantity)}
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <form action={deleteItem}>
            <Button className="group bg-white hover:bg-slate-200 shadow-none border">
              <PiTrash
                size={15}
                className="opacity-60 text-black group-hover:opacity-100 group-hover:text-red-700 cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
              />
            </Button>
          </form>
        </div>
      </div>

      <div className="md:hidden w-full p-4 items-center hover:bg-slate-50 border-b">
        <div className="h-[150px] w-full aspect-square relative border rounded-md bg-white">
          <Image
            src={product.image}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex justify-between w-full items-center my-2">
          <p className="w-[50%]">{product.name}</p>
          <p className="w-[50%] text-end font-medium text-lg">
            {formatPrice(product.price * item.quantity)}
          </p>
        </div>

        <div className="flex flex-row w-full justify-around items-center py-3 my-2 border rounded-md bg-gray-100 text-black">
          <div className="cursor-pointer">
            <form action={removeOne}>
              <Button className="bg-white border shadow-none hover:bg-slate-200 transition-all ease-in-out duration-150">
                <PiMinusCircle size={20} className="opacity-100 text-black" />
              </Button>
            </form>
          </div>
          <div>
            <p className="font-light text-md">{item.quantity}</p>
          </div>
          <div className="cursor-pointer">
            <form action={addOne}>
              <Button className="bg-white border shadow-none hover:bg-slate-200 transition-all ease-in-out duration-150">
                <PiPlusCircle size={20} className="opacity-100 text-black" />
              </Button>
            </form>
          </div>
          <div className="cursor-pointer">
            <form action={deleteItem}>
              <Button className="bg-white border shadow-none hover:bg-slate-200 transition-all ease-in-out duration-150">
                <PiTrash
                  size={20}
                  className="text-red-600 cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
