"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import prod1 from "../../public/images/prod01.png";
import prod2 from "../../public/images/prod02.png";
import prod3 from "../../public/images/prod03.png";
import prod4 from "../../public/images/prod04.png";
import prod5 from "../../public/images/prod05.png";
import prod6 from "../../public/images/prod06.png";
import prod7 from "../../public/images/prod07.png";
import prod8 from "../../public/images/prod08.png";
import prod9 from "../../public/images/prod09.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import placeholder from "../../public/images/placeholder-image.png";

const ProductView = ({ image }) => {
  const [imagen, setImagen] = useState(image);

  return (
    <div className="flex flex-col gap-[100px] justify-center items-center h-[calc(100vh-60px)] mt-[60px]">
      <div className="w-[100%] md:w-[80%] h-[50%] relative flex justify-center items-center">
        <Image
          src={imagen ? imagen : placeholder}
          fill
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
  );
};

export default ProductView;
