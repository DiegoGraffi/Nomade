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
    <div className="flex flex-row justify-between py-3 px-4 w-screen absolute z-[10] top-0">
      <Image src={Logo} width={60} alt="logo" />
      <div className="flex items-center">
        <ul className="flex gap-2.5">
          <li className="text-xs font-light cursor-pointer bg-neutral-400 text-white hover:bg-black transition-all ease-in-out duration-150 py-2 px-3 rounded-md">
            <Link href="/">Inicio</Link>
          </li>
          <li className="text-xs font-light cursor-pointer bg-neutral-400 text-white hover:bg-black transition-all ease-in-out duration-150 py-2 px-3 rounded-md">
            <Link href="/#nosotros">Nosotros</Link>
          </li>
          <li className="text-xs font-light cursor-pointer bg-neutral-400 text-white hover:bg-black transition-all ease-in-out duration-150 py-2 px-3 rounded-md">
            <Link href="/#category">Categorias</Link>
          </li>
          <li className="text-xs font-light cursor-pointer bg-neutral-400 text-white hover:bg-black transition-all ease-in-out duration-150 py-2 px-3 rounded-md">
            <Link href="/#contacto">Contacto</Link>
          </li>
          <li className="text-xs font-light cursor-pointer bg-neutral-400 text-white hover:bg-black transition-all ease-in-out duration-150 py-2 px-3 rounded-md">
            <Link href="/products">Productos</Link>
          </li>
          {user?.admin && (
            <li className="group text-xs font-light cursor-pointer bg-neutral-400 text-white hover:bg-black transition-all ease-in-out duration-150 py-2 px-3 rounded-md relative">
              <Link href="/admin">Admin</Link>
              <ul className="hidden absolute w-max left-0 bg-neutral-400 rounded-md p-2 group-hover:flex flex-col justify-center items-center gap-2 mt-[10px] transition-all ease-in-out duration-150">
                <li className="p-2 hover:bg-black transition-all ease-in-out duration-150 rounded-md">
                  <Link href="/admin">Agregar Productos</Link>
                </li>
                <li className="p-2 hover:bg-black transition-all ease-in-out duration-150 rounded-md">
                  <Link href="/admin/products">Eliminar Productos</Link>
                </li>
              </ul>
            </li>
          )}
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

export default NavigationMenuDemo;
