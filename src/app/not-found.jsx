import Image from "next/image";
import React from "react";
import fondo from "../../public/images/404.jpg";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="w-full h-screen rounded-2xl flex justify-center items-center p-4 relative mt-[60px]">
        <div className="w-[70%] h-max p-10 rounded-lg flex flex-col justify-center items-center gap-[25px] z-[10] bg-white">
          <h3 className="text-[80px] md:text-[120px] lg:text-[150px]">404</h3>

          <p className="text-md md:text-lg font-light">Página no encontrada</p>
          <Separator />
          <Link
            href="./"
            className="text-md md:text-lg font-light opacity-70 hover:opacity-100 hover:font-normal transition-all ease-in-out duration-150 border p-4 rounded-md hover:border-black text-center"
          >
            Volver a la pagina de inicio
          </Link>
        </div>
        <Image src={fondo} fill className="object-cover rounded-2xl" />
      </div>
    </div>
  );
};

export default NotFound;
