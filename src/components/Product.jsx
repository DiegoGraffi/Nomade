import Image from "next/image";
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import prod from "../../public/images/prod01.png";
import { PiHeart } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Product = (props) => {
  const { data } = props;

  return (
    <div className="rounded-md flex flex-col justify-center items-center p-4  md:h-[350px] md:max-h-[350px] border">
      <Link href={"/products/productDetail" + "/" + data.id} className="w-full">
        <div className="aspect-square h-[180px] relative p-2  w-full rounded-md">
          <Image src={data.image} fill className="object-cover rounded-md" />
        </div>
        <div className="bg-gray-50 rounded-md w-full mt-4 p-2 h-[100px]">
          <div className="h-[50%] overflow-hidden">
            <p className="text-sm font-light ">{data.name}</p>
          </div>
          <Separator className="my-2" />

          <p className="text-lg md:text-lg font-medium h-[40%]">
            ${data.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
