"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { formatPrice } from "@/lib/formatter";

const Admin = () => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/productos").then((res) => res.json()),
  });

  const { data: categories } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("/api/categories").then((res) => res.json()),
  });
  return (
    <section className="w-full min-h-screen mt-[80px] p-4 gap-4 flex flex-col md:flex-row justify-center items-start container mx-auto ">
      <div className="flex flex-col p-4 border rounded-md flex-1">
        <p className="text-[36px] md:text-[64px] lg:text-[80px]">
          Panel Administrador
        </p>
        <Separator className="my-4" />
        <ul className="flex justify-end gap-2">
          <Link href="/admin/products/new">
            <li className="border p-4 rounded-md bg-black text-white text-sm text-center hover:bg-accent hover:text-accent-foreground transition-all ease-in-out duration-200">
              Nuevo producto
            </li>
          </Link>
          <Link href="/admin/categories/new">
            <li className="border p-4 rounded-md bg-black text-white text-sm text-center hover:bg-accent hover:text-accent-foreground transition-all ease-in-out duration-200">
              Nueva categoria
            </li>
          </Link>
          <Link href="/admin/products">
            <li className="border p-4 rounded-md bg-black text-white text-sm text-center hover:bg-accent hover:text-accent-foreground transition-all ease-in-out duration-200">
              Eliminar productos
            </li>
          </Link>
        </ul>
      </div>

      <div className="border rounded-md p-4 flex-1">
        <div className="flex flex-col items-start">
          <p className="font-semibold">Productos</p>
          <p className="font-light text-sm mt-2">
            La lista de productos ofrece una función de edición instantánea. Al
            <span className="font-semibold">
              {" "}
              hacer clic en cualquiera de los elementos
            </span>
            , se activa la opción para modificar y ajustar los detalles del
            producto seleccionado de manera sencilla y rápida.
          </p>

          <Separator className="my-4" />
        </div>
        <div className="flex flex-col">
          {products.length > 0 ? (
            products.map((product) => (
              <Link href={"/admin/products/" + product.id}>
                <div className="flex gap-2 justify-between items-center p-2 hover:bg-accent rounded-md transition-all ease-in-out duration-150">
                  <div className="w-[100px] h-[100px] aspect-square rounded-md border relative bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain rounded-md p-2"
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm ">{product.name}</p>
                    <p className="text-sm font-medium">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Todavia no hay productos agregados</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admin;
