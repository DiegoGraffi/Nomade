"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Products() {
  const query = useSuspenseQuery({
    queryKey: ["productos"],
    queryFn: () => fetch("/api/productos").then((res) => res.json()),
  });

  return (
    <div>
      <section className="min-h-screen w-screen p-4 container mx-auto">
        <div className="flex flex-col md:flex-row mt-[80px] md:gap-0">
          <div className="p-4 border rounded-lg">
            <p>hola</p>
            <ul className="p-2">
              {query.data?.map((product) => (
                <li
                  className="group my-2 border p-4 rounded-md flex gap-4 items-center justify-center "
                  key={product.id}
                >
                  <div className="w-[50%] h-[150px] relative rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      fill
                      className="object-contain group-hover:scale-110 transition-all ease-in-out duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[50%]">
                    <div className="w-full group-hover:bg-slate-100 transition-all ease-in-out duration-200 rounded-md p-4">
                      {product.name}
                    </div>
                    <button className="border rounded-md p-2 w-full hover:bg-slate-100 transition-all ease-in-out duration-200">
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
