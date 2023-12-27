import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import producto from "../../public/images/prod01.png";
import { PiPlusCircle, PiMinusCircle, PiTrash } from "react-icons/pi";

const CartProduct = () => {
  return (
    <div className="border p-4 rounded-md my-2">
      <div className="flex justify-start gap-[25px] items-stretch ">
        <div className="w-[100px] h-[100px] relative">
          <Image src={producto} fill className="object-contain" />
        </div>
        <div className="h-full flex flex-col gap-2">
          <CardTitle className="text-sm">
            Campera Cordura Hombre Gallant
          </CardTitle>
          <CardDescription>
            Cantidad: <b className="text-black">01</b>
          </CardDescription>
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div className="group p-2 opacity-60 w-full h-full flex justify-center items-center cursor-pointer hover:opacity-100 border hover:bg-neutral-400 transition-all ease-in-out duration-150 rounded-l-md border-r-0">
          <PiMinusCircle
            size={20}
            className="text-black group-hover:text-white"
          />
        </div>
        <div className="group p-2 opacity-60 w-full h-full flex justify-center items-center cursor-pointer hover:opacity-100 border hover:bg-neutral-400 transition-all ease-in-out duration-150 border-r-0">
          <PiPlusCircle
            size={20}
            className="text-black group-hover:text-white"
          />
        </div>

        <AlertDialog>
          <AlertDialogTrigger>
            <div className="group p-2 opacity-60 w-full h-full flex justify-center items-center cursor-pointer hover:opacity-100 border hover:bg-red-700 transition-all ease-in-out duration-150 rounded-r-md">
              {" "}
              <PiTrash
                size={20}
                className="text-black group-hover:text-white"
              />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-red-700">
                ¿Seguro que quieres eliminar este producto?
              </AlertDialogTitle>
              <Separator />
              <AlertDialogDescription>
                Estás a punto de eliminar este producto de tu carrito. ¿Estás
                seguro de querer hacerlo? Por favor, confirma tu elección para
                proceder.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-red-700 hover:bg-red-600">
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default CartProduct;
