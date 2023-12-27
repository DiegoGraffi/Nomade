"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../public/images/Logo.svg";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";

import { PiUserBold, PiShoppingCartBold, PiXBold } from "react-icons/pi";
import Image from "next/image";
import CartProduct from "./CartProduct";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

const components = [
  {
    title: "Indumentaria",
    href: "#",
    description:
      "Ropa diseñada para proteger y brindar comodidad al conducir motocicletas.",
  },
  {
    title: "Protección",
    href: "#",
    description:
      "Elementos esenciales para la seguridad del motociclista, como cascos y protectores.",
  },
  {
    title: "Accesorios",
    href: "#",
    description:
      "Componentes para mejorar el rendimiento y mantenimiento de la motocicleta.",
  },
  {
    title: "Equipamiento para Viajes",
    href: "#",
    description:
      "Productos diseñados para viajes largos en moto, como sistemas de almacenamiento y navegación.",
  },
  {
    title: "Mantenimiento",
    href: "#",
    description:
      "Artículos necesarios para el cuidado y funcionamiento adecuado de la motocicleta.",
  },
  {
    title: "Tecnología y Seguridad",
    href: "#",
    description:
      "Productos que integran tecnología para mejorar la seguridad y experiencia de conducción.",
  },
];

function NavigationMenuDemo() {
  return (
    <div className="flex flex-row justify-between py-3 px-[25px] w-screen absolute z-[10] top-0">
      <Image src={Logo} width={60} alt="logo" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Nomade
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="Nosotros">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="#" title="Galeria">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Contacto">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p className="px-7 py-4 text-md font-medium">Categorias</p>
              <Separator className="px-7" />
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Sheet className="z-[100000]">
                  <SheetTrigger>Carrito</SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Productos en el carrito</SheetTitle>
                      <SheetDescription>
                        Este panel te ofrece una vista rápida de los productos
                        que has seleccionado. Revisa, agrega o elimina artículos
                        antes de proceder a la compra.
                      </SheetDescription>
                    </SheetHeader>

                    <ScrollArea className="mt-[25px] flex flex-col h-[70%] relative border p-4 rounded-md">
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                    </ScrollArea>

                    <div className="border rounded-md mt-4 p-4 w-full h-min flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <p className="font-light">8 Items</p>
                        <p className="font-medium">$999.999</p>
                      </div>
                      <div className="w-full">
                        <Button variant="outline" className="w-full">
                          Ir a pagar
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="bg-[url('../../public/images/user.jpg')] bg-cover rounded-full w-12 h-12  cursor-pointer"></div>{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-[25px] mt-3">
          <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2 items-center">
            {" "}
            <PiUserBold /> Perfil
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center">
            {" "}
            <PiShoppingCartBold />
            Mis Compras
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center text-rose-700">
            <PiXBold />
            Cerrar Sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
