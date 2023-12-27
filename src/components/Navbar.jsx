import React from "react";
import Link from "next/link";
import Logo from "../../public/images/Logo.svg";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";

import { PiUserBold, PiShoppingCartBold, PiXBold } from "react-icons/pi";
import Image from "next/image";
import CartProduct from "./CartProduct";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { getLoggedInUser, getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

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
      {user ? (
        <>
          <h1>Hola {user.name}!</h1>
          <form action={logout}>
            <Button>Cerrar Sesion</Button>
          </form>
          <Link href="/cart">
            <Button>Carrito</Button>
          </Link>
        </>
      ) : (
        <Link href="/register">
          <Button>Iniciar Sesion</Button>
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
