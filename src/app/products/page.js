import React from "react";
import Product from "@/components/Product";
import { db } from "@/lib/db";
import { products } from "../../../db/schema";
import Filters from "../../components/Filters";

export default async function Products() {
  const allProducts = await db.select().from(products);

  return (
    <div>
      <section className="min-h-screen w-screen p-4 container mx-auto">
        <div className="flex flex-col md:flex-row mt-[80px] md:gap-0">
          <Filters />
          <div className="border border-t-0 md:border-t w-full md:w-[75%] p-4 rounded-b-md md:rounded-bl-none md:rounded-r-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-center items-center">
            {allProducts.length === 0 ? (
              <p className="text-[32px] border w-max ">
                Aún no hay productos agregados
              </p>
            ) : (
              allProducts.map((product, index) => (
                <Product key={index} data={product} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
