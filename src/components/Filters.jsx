"use client";

import { React, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";

const Filters = () => {
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("search") ?? "");
  const [minPrice, setMinPrice] = useState(params.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(params.get("maxPrice") ?? "");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState(params.get("category") ?? "");
  const router = useRouter();

  const { data } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("/api/categories").then((res) => res.json()),
  });

  function applyFilters() {
    const searchParams = new URLSearchParams({
      search,
      minPrice,
      maxPrice,
      sort,
      category,
    });

    // Funcion que elimina el parametro en caso de estar vacio
    searchParams.forEach((value, key) => {
      if (value == "") searchParams.delete(key);
    });

    router.push("?" + searchParams);
  }

  function removeFilters() {
    router.push("?");
  }

  return (
    <div className="border w-full md:w-[25%] md:border-r-0 p-4 rounded-t-md md:rounded-tr-none md:rounded-l-">
      <Badge variant="secondary" className="my-4">
        Filtros
      </Badge>
      <Separator />
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
          <Input
            type="text"
            placeholder="Busca un producto"
            className="w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-black hover:bg-accent w-full shadow-none hover:text-accent-foreground border"
            onClick={applyFilters}
          >
            Buscar
          </Button>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label>Rango de precio</Label>
          <div className="flex mt-2 gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label>Ordenar por precio</Label>

          <Select className="mt-2" value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Elegir orden" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Precio ascendente</SelectItem>
              <SelectItem value="desc">Precio descendente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label>Categorias</Label>

          <Select className="mt-2" value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Categorías" />
            </SelectTrigger>
            <SelectContent>
              {data.map((category) => (
                <SelectItem value={category.id} key={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className="bg-black w-full hover:bg-accent shadow-none hover:text-accent-foreground border"
          onClick={applyFilters}
        >
          Aplicar filtro
        </Button>
        <Button
          className="bg-black hover:bg-accent w-full shadow-none hover:text-accent-foreground border mt-2"
          onClick={removeFilters}
        >
          Eliminar filtros
        </Button>
      </div>
    </div>
  );
};

export default Filters;
