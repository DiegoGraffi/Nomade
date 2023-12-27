"use client";

import { useState, React, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function CreateProduct() {
  const [producto, setProducto] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    image: "",
    category_id: "",
  });

  const { data } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("/api/categories").then((res) => res.json()),
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/productos", producto);
  };

  return (
    <section className="w-full min-h-screen mt-[80px] p-4 gap-4 flex justify-center items-center container mx-auto ">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="name">Nombre Producto</Label>
          <Input
            type="text"
            id="name"
            placeholder="Nombre producto"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="price">Precio</Label>
          <Input
            type="number"
            id="price"
            placeholder="Precio"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="stock">Stock</Label>
          <Input
            type="number"
            id="stock"
            placeholder="Stock"
            name="stock"
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="category">Categoria</Label>
          <select id="category" name="category" onChange={handleChange}>
            {data.map((category, index) => (
              <option value={category.id} key={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            placeholder="Descripción"
            rows={5}
            name="description"
            onChange={handleChange}
          />
        </div>

        <ScrollArea className="grid w-full items-center gap-2 border rounded-md p-4 h-[200px]">
          <Label htmlFor="images">Imagenes</Label>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 01:</p>
              <Input
                type="text"
                id="imagen01"
                placeholder="url imagen"
                onChange={handleChange}
                name="image"
              />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 02:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 03:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 04:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 05:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 06:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 07:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 08:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 09:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
            <div className="flex flex-col items-start md:grid md:grid-cols-[15%,85%] gap-4 md:items-center">
              <p className="font-light text-sm">Imagen 10:</p>
              <Input type="text" id="imagen01" placeholder="url imagen" />
            </div>
          </div>
        </ScrollArea>
        <Button variant="outline">Añadir</Button>
      </form>
    </section>
  );
}
