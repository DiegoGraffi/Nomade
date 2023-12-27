import Image from "next/image";
import Logo from "../../public/images/Logo.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PiFacebookLogo, PiYoutubeLogo, PiTwitterLogo } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center border h-[max-content] p-[25px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full  lg:gap-[25px]">
        <div className="p-2">
          <CardHeader>
            <CardTitle className="flex justify-center lg:justify-start">
              <Image src={Logo} width={100} alt="logo Nomade" />
            </CardTitle>
          </CardHeader>
        </div>

        <div className="flex flex-col items-center md:items-start p-2">
          <CardHeader>
            <CardTitle>Navegación</CardTitle>
          </CardHeader>
          <Separator />

          <CardContent className="pt-5 flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-sm opacity-60 hover:opacity-100 transition-all ease-in-out duration-150"
            >
              Inicio
            </Link>
            <Link
              href="/products"
              className="text-sm opacity-60 hover:opacity-100 transition-all ease-in-out duration-150"
            >
              Productos
            </Link>
            <Link
              href="/#nosotros"
              className="text-sm opacity-60 hover:opacity-100 transition-all ease-in-out duration-150"
            >
              Nosotros
            </Link>
            <Link
              href="/cart"
              className="text-sm opacity-60 hover:opacity-100 transition-all ease-in-out duration-150"
            >
              Carrito
            </Link>
            <Link
              href="/#contacto"
              className="text-sm opacity-60 hover:opacity-100 transition-all ease-in-out duration-150"
            >
              Contacto
            </Link>
          </CardContent>
        </div>

        <div className="p-2">
          <CardHeader className="items-center md:items-start">
            <CardTitle>Redes Sociales</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col items-center md:items-start gap-[20px] justify-between pt-5">
            <div className="group flex items-center gap-[15px]">
              <PiFacebookLogo
                size={20}
                className="opacity-60 group-hover:opacity-100"
              />
              <p className="text-sm opacity-60 group-hover:opacity-100 transition-all ease-in-out duration-150 cursor-pointer">
                Nómade
              </p>
            </div>

            <div className="group flex items-center gap-[15px]">
              <PiYoutubeLogo
                size={20}
                className="opacity-60 group-hover:opacity-100"
              />
              <p className="text-sm opacity-60 group-hover:opacity-100 transition-all ease-in-out duration-150 cursor-pointer">
                Nómade Motos
              </p>
            </div>

            <div className="group flex items-center gap-[15px]">
              <PiTwitterLogo
                size={20}
                className="opacity-60 group-hover:opacity-100"
              />
              <p className="text-sm opacity-60 group-hover:opacity-100 transition-all ease-in-out duration-150 cursor-pointer">
                @Nómade
              </p>
            </div>
          </CardContent>
        </div>

        <div className="p-2">
          <CardHeader className="items-center md:items-start">
            <CardTitle>Newsletter</CardTitle>
          </CardHeader>
          <Separator />

          <CardContent className="pt-5">
            <Label htmlFor="email" className="text-sm opacity-60 font-normal">
              Ingresa tu email
            </Label>
            <Input name="email" />
            <Button
              variant="outline"
              className="mt-[10px] items-center md:items-start w-full md:w-auto"
            >
              Enviar
            </Button>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default Footer;
