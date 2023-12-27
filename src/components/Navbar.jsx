import React from "react";
import Link from "next/link";
import Logo from "../../public/images/Logo.svg";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { getLoggedInUser, getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

async function NavigationMenuDemo() {
  const user = await getLoggedInUser();

  async function logout() {
    "use server";

    const session = await getSession();

    session.destroy();

    redirect("/register");
  }

  return (
    <div className="flex flex-row justify-between py-3 px-[25px] w-screen absolute z-[10] top-0">
      <Image src={Logo} width={60} alt="logo" />
      <div className="flex items-center">
        <ul className="flex gap-2.5">
          <li className="text-sm font-light cursor-pointer bg-black text-white hover:bg-neutral-800 transition-all ease-in-out duration-200 py-2 px-3 rounded-md">
            <a href="/">Inicio</a>
          </li>
          <li className="text-sm font-light cursor-pointer bg-black text-white hover:bg-neutral-800 transition-all ease-in-out duration-200 py-2 px-3 rounded-md">
            <a href="/#nosotros">Nosotros</a>
          </li>
          <li className="text-sm font-light cursor-pointer bg-black text-white hover:bg-neutral-800 transition-all ease-in-out duration-200 py-2 px-3 rounded-md">
            <a href="/#category">Categorias</a>
          </li>
          <li className="text-sm font-light cursor-pointer bg-black text-white hover:bg-neutral-800 transition-all ease-in-out duration-200 py-2 px-3 rounded-md">
            <a href="/#contacto">Contacto</a>
          </li>
          <li className="text-sm font-light cursor-pointer bg-black text-white hover:bg-neutral-800 transition-all ease-in-out duration-200 py-2 px-3 rounded-md">
            <a href="/products">Productos</a>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="flex gap-2 items-center">
          <h1>
            Hola <b>{user.name}</b>!
          </h1>
          <form action={logout}>
            <Button className="bg-black hover:bg-red-700 text-xs">
              Cerrar Sesion
            </Button>
          </form>
          <Link href="/cart">
            <Button className="bg-black hover:bg-blue-700 text-xs">
              Carrito
            </Button>
          </Link>
        </div>
      ) : (
        <Link href="/register">
          <Button className="bg-black hover:bg-neutral-800">
            <p className="font-light">
              Iniciar Sesión /{" "}
              <span className="font-semibold">Registrarse</span>
            </p>
          </Button>
        </Link>
      )}
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
