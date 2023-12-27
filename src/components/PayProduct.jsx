import Image from "next/image";
import React from "react";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { products } from "../../db/schema";
import { formatPrice } from "@/lib/formatter";
import placeholder from "../../public/images/placeholder-image.png";

async function BuyProduct(props) {
  const { item } = props;
  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.id, props.item.product_id));

  return (
    <div className="w-full flex items-center hover:bg-slate-50 border rounded-md p-2 my-2">
      <div className="group flex flex-col gap-2 justify-start items-center flex-1 p-2">
        <div className="min-w-[120px] max-w-[150px] h-[150px] relative border rounded-md bg-white overflow-hidden">
          <Image
            src={product.image ? product.image : placeholder}
            fill
            className="object-contain rounded-md p-2 group-hover:scale-[1.3] transition-all ease-in-out duration-200"
          />
        </div>
        <p className="text-center">{product.name}</p>
      </div>

      <div className="flex flex-col w-full flex-1 gap-4">
        <div className="flex flex-col md:flex-row gap-5 md:gap-1 w-full justify-around items-center py-2 ">
          <p className="font-light text-sm ">Cantidad: {item.quantity}</p>
        </div>

        <div className="w-full md:flex items-center justify-center hidden">
          <p className="font-ligth text-sm md:font-medium md:text-base">
            {formatPrice(product.price)} c/u
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
