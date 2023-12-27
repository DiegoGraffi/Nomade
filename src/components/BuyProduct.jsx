import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import prod from "../../public/images/prod01.png";
import { PiPlusCircle, PiMinusCircle, PiTrash } from "react-icons/pi";

const BuyProduct = () => {
  return (
    <div>
      <div className="hidden w-full p-4 md:grid grid-cols-[2fr,1fr,1fr,.5fr] items-center hover:bg-slate-50">
        <div className="flex flex-row gap-2 justify-center items-center ">
          <div className="w-[150px] h-[150px] relative border rounded-md bg-white">
            <Image src={prod} fill className="object-contain rounded-md" />
          </div>
          <p>Campera Cordura Hombre Gallant</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-around items-center py-2">
          <div className="cursor-pointer">
            <PiMinusCircle
              size={20}
              className="opacity-60 hover:opacity-100 text-black hover:scale-110 transition-all ease-in-out duration-150"
            />
          </div>
          <div>
            <p className="font-light text-sm md:font-medium md:text-base">01</p>
          </div>
          <div className="cursor-pointer">
            <PiPlusCircle
              size={20}
              className="opacity-60 hover:opacity-100 text-black hover:scale-110 transition-all ease-in-out duration-150"
            />
          </div>
        </div>

        <div className="w-full md:flex items-center justify-center hidden">
          <p className="font-ligth text-sm md:font-medium md:text-base">
            $ 479.210{" "}
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <PiTrash
            size={20}
            className="opacity-60 text-black hover:opacity-100 hover:text-red-700 cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
          />
        </div>
      </div>

      <div className="md:hidden w-full p-4 items-center hover:bg-slate-50 border-b">
        <div className="h-[150px] w-full aspect-square relative border rounded-md bg-white">
          <Image src={prod} fill className="object-contain rounded-md" />
        </div>
        <div className="flex justify-between w-full items-center my-2">
          <p className="w-[50%]">Campera Cordura Hombre Gallant</p>
          <p className="w-[50%] text-end font-medium text-lg">$ 479.210</p>
        </div>

        <div className="flex flex-row w-full justify-around items-center py-3 my-2 border rounded-md bg-gray-100 text-black">
          <div className="cursor-pointer">
            <PiMinusCircle
              size={20}
              className="hover:scale-110 transition-all ease-in-out duration-150"
            />
          </div>
          <div>
            <p className="font-light text-md">01</p>
          </div>
          <div className="cursor-pointer">
            <PiPlusCircle
              size={20}
              className="hover:scale-110 transition-all ease-in-out duration-150"
            />
          </div>
          <div className="cursor-pointer">
            <PiTrash
              size={20}
              className="text-red-600 cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
