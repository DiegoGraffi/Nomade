"use client";

import Product from "@/components/Product";
import Filters from "../../components/Filters";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();

  const { data } = useSuspenseQuery({
    queryKey: ["productos", ...searchParams.values()],
    queryFn: () => {
      if (searchParams.size) {
        return fetch("/api/productos?" + searchParams).then((res) =>
          res.json()
        );
      } else {
        return fetch("/api/productos").then((res) => res.json());
      }
    },
  });

  return (
    <div>
      <section className="min-h-screen w-screen p-4 container mx-auto">
        <div className="flex flex-col md:flex-row mt-[80px] md:gap-0">
          <Filters />
          <div className="border border-t-0 md:border-t w-full md:w-[75%] p-4 rounded-b-md md:rounded-bl-none md:rounded-r-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-center items-center">
            {data.length === 0 && (
              <p className="text-[32px] border w-full mx-auto">
                Aún no hay productos agregados
              </p>
            )}
            {data.map((product, index) => (
              <Product key={index} data={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
