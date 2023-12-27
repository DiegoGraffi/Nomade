import Image from "next/image";
import React from "react";
import product from "../../public/images/prod01.png";
import { Button } from "@/components/ui/button";

const AdminProduct = () => {
  return (
    <div className="p-4 border rounded-md flex gap-4 h-max my-4">
      <div className="border rounded-md p-4 relative h-[150px] w-[150px]">
        <Image
          src={product}
          fill
          className="object-contain bg-white rounded-md"
        />
      </div>
      <div className="h-full w-full flex flex-col  gap-4">
        <div className="gap-2 flex flex-col">
          <p className="font-light text-sm">Campera Cordura Hombre Gallant</p>
          <p className="font-medium text-md">$479.210</p>
        </div>
        <Button variant="outline">Editar</Button>
      </div>
    </div>
  );
};

export default AdminProduct;
