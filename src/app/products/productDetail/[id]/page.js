"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import prod1 from "../../../../../public/images/prod01.png";
import prod2 from "../../../../../public/images/prod02.png";
import prod3 from "../../../../../public/images/prod03.png";
import prod4 from "../../../../../public/images/prod04.png";
import prod5 from "../../../../../public/images/prod05.png";
import prod6 from "../../../../../public/images/prod06.png";
import prod7 from "../../../../../public/images/prod07.png";
import prod8 from "../../../../../public/images/prod08.png";
import prod9 from "../../../../../public/images/prod09.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PiShoppingCartBold, PiHeartBold } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductDetail = ({ params }) => {
  const [imagen, setImagen] = useState(prod1);

  return (
    <div>
      <section className="w-screen min-h-screen ">
        <div className="container mx-auto ">
          <div className="flex flex-col gap-[25px] justify-center items-center h-screen">
            <div className="w-[100%] md:w-[80%] h-[70%] relative flex justify-center items-center">
              <Image
                src={imagen}
                alt="imagen principal"
                className="rounded-lg object-contain"
              />
            </div>

            <ScrollArea className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[min-content] border whitespace-nowrap rounded-md">
              <div className="flex w-max space-x-4 p-4">
                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod1}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod1)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod2}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod2)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod3}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod3)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod4}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod4)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod5}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod5)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod6}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod6)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod7}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod7)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod8}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod8)}
                  />
                </div>

                <div className="w-[100px] h-[100px] p-2 opacity-80 rounded-md border border-opacity-50 hover:opacity-100 hover:border-opacity-100 hover:p-1 hover:border-black transition-all ease-in-out duration-150 cursor-pointer">
                  <Image
                    src={prod9}
                    alt="imagen producto"
                    className="object-contain rounded-sm"
                    onClick={() => setImagen(prod9)}
                  />
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-[25px] md:mt-[25px]">
            <div className="w-full p-4">
              <div className="flex gap-[10px]">
                <Badge variant="secondary">Indumentaria</Badge>
                <Badge variant="secondary">Camperas</Badge>
              </div>

              <p className="mt-4 font-semibold text-3xl">
                Campera cordura hombre Gallant {params.id}
              </p>
              <p className="mt-4 text-[36px]">$479.210</p>
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
                <Button
                  variant="secondary"
                  className="w-full gap-2 hover:bg-blue-500 hover:text-white"
                >
                  <PiShoppingCartBold />
                  Añadir al carrito
                </Button>
              </div>
            </div>
          </div>
          <Separator />

          <div className="w-full p-4">
            <p className="text-lg">Descripción</p>
            <div className="my-10 ">
              <p>
                La nueva campera Gallant de LS2 puede llevarte a cualquier
                parte, desde viajes alrededordel mundo hasta el brutal Rally
                Dakar. Su caracter utilitario es insuperable, comenzando con su
                exterior de cordura resistente a la abrasion, su membrana
                resistente al agua y respirable garantizan un viaje comfortable
                y su interior termico desmontable expande su uso incluso en
                condiciones mas frias. Ofrece una ventilacion increible sobre
                sus brazos y cuerpo, que promueve activamente el flujo de aire.
                Con muchas opciones de almacenamiento la Gallant abre el camino
                para su proxima aventura, dentro y fuera de la
                carretera.Incluyen tecnologia de proteccion contra impactos en
                espalda, codos y hombros con certificacion europea
                EN1621-1:2012, Level 1 detalles reflectivos y sistema de
                acoplecon el Pantalon Chart de LS2 Cordura.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
