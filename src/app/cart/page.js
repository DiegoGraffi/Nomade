import React from "react";
import { Badge } from "@/components/ui/badge";
import BuyProduct from "@/components/BuyProduct";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getLoggedInUser } from "@/lib/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { cartItem } from "../../../db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

async function Cart() {
  const user = await getLoggedInUser();

  if (!user) {
    notFound();
  }

  const cartItems = await db
    .select()
    .from(cartItem)
    .where(eq(cartItem.user_id, user.id));

  return (
    <div>
      <section className="min-h-screen w-screen p-4 container mx-auto">
        <div className="mt-[80px] flex flex-col md:flex-row h-auto md:h-[850px]">
          <div className="border overflow-scroll w-full md:w-[70%] rounded-t-md md:rounded-tr-none border-b-0 md:border-b md:rounded-l-md p-4 h-[100vh] md:h-auto">
            <div className="w-full grid-cols-[2fr,1fr,1fr,.5fr] hidden md:grid">
              <Badge variant="secondary" className="w-max">
                Producto
              </Badge>
              <div className="flex items-center justify-center">
                <Badge variant="secondary" className="w-max">
                  Cantidad
                </Badge>
              </div>
              <div className="flex items-center justify-center">
                <Badge variant="secondary" className="w-max">
                  Precio
                </Badge>
              </div>

              <Badge variant="secondary" className="w-max">
                Eliminar
              </Badge>
            </div>
            <div className="w-full border rounded-md mt-4">
              {cartItems.map((item, index) => (
                <BuyProduct item={item} key={index} />
              ))}
            </div>

            <Button className="mt-4 bg-black hover:bg-accent w-full shadow-none hover:text-accent-foreground border">
              {" "}
              <Link href="/products">Continuar comprando</Link>
            </Button>
          </div>
          <div className="border rounded-b-md md:rounded-r-md md:rounded-bl-none md:border-l-0 w-full md:w-[30%] p-4">
            <Badge variant="secondary">Resumen</Badge>
            <div className="border w-full mt-4 gap-4 h-max p-4 rounded-md flex justify-between flex-row md:flex-col lg:flex-row">
              <p className="font-light">{cartItems.length} Productos</p>
              <p className="font-medium">$ 962.102</p>
            </div>

            <div className="flex flex-col gap-4 w-full p-4 rounded-md border mt-4">
              <div>
                <Label htmlFor="email">Envío</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Envio" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="local">
                      <p>Retirar por local ($0)</p>
                    </SelectItem>
                    <SelectItem value="correo">
                      <p>Envío a sucursal correo ($2500)</p>
                    </SelectItem>
                    <SelectItem value="domicilio">
                      <p>Envío a domicilio ($3500)</p>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email">Descuento</Label>
                <Input
                  type="text"
                  id="descuento"
                  placeholder="Ingrese su código de descuento"
                  className="mt-2"
                />
                <Button variant="outline" className="mt-2 bg-black text-white">
                  Aplicar cupón
                </Button>
              </div>
            </div>

            <div className="border w-full mt-4 gap-4 h-max p-4 rounded-md">
              <div className="flex flex-row md:flex-col lg:flex-row justify-between">
                <p className="font-light">Costo total</p>
                <p className="font-medium">$ 965.602</p>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 bg-black text-white"
              >
                Pagar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
