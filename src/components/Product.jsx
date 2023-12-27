import Image from "next/image";
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import prod from "../../public/images/prod01.png";
import { PiHeart } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";

const Product = () => {
  return (
    <div className="border rounded-md flex flex-col justify-center items-center p-4">
      <div className="aspect-square h-[180px] relative p-2  w-full rounded-md">
        <Toggle className="absolute z-[2] bg-neutral-400 rounded-full">
          <PiHeart />
        </Toggle>

        <Image src={prod} fill className="object-cover rounded-md" />
      </div>
      <div className="bg-gray-50 rounded-md w-full mt-4 p-2">
        <p className="text-sm  font-light">Campera Cordura Hombre Gallant</p>
        <Separator className="my-2" />

        <p className="text-lg md:text-lg font-medium">$479.210</p>
      </div>
    </div>
  );
};

export default Product;
