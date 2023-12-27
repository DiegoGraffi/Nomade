import React from "react";
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
import Product from "@/components/Product";

const Products = () => {
  return (
    <div>
      <section className="min-h-screen w-screen p-4 container mx-auto">
        <div className="flex flex-col md:flex-row mt-[80px] md:gap-0">
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
                />
                <Button type="submit" className="bg-black">
                  Buscar
                </Button>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                <Label>Rango de precio</Label>
                <div className="flex mt-2 gap-2">
                  <Input type="number" placeholder="Min" />
                  <Input type="number" placeholder="Max" />
                </div>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                <Label>Ordenar por precio</Label>

                <Select className="mt-2">
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Elegir orden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ascendente">
                      Precio ascendente
                    </SelectItem>
                    <SelectItem value="descendente">
                      Precio descendente
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                <Label>Categorias</Label>

                <Select className="mt-2">
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indumentaria">Indumentaria</SelectItem>
                    <SelectItem value="proteccion">Protección</SelectItem>
                    <SelectItem value="accesorios">Accesorios</SelectItem>
                    <SelectItem value="viajes">
                      Equipamiento para viajes
                    </SelectItem>
                    <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                    <SelectItem value="tecnologia">
                      Tecnología y seguridad
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="border border-t-0 md:border-t w-full md:w-[75%] p-4 rounded-b-md md:rounded-bl-none md:rounded-r-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
