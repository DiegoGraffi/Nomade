import React from "react";
import { Badge } from "@/components/ui/badge";
import BuyProduct from "@/components/BuyProduct";
import PayProduct from "@/components/PayProduct";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
import { cartItem, products } from "../../../db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { formatPrice } from "@/lib/formatter";

async function Cart() {
  const user = await getLoggedInUser();

  if (!user) {
    notFound();
  }

  const cartItems = await db
    .select()
    .from(cartItem)
    .where(eq(cartItem.user_id, user.id));

  let total = 0;

  for (const item of cartItems) {
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, item.product_id));

    total += product.price * item.quantity;
  }

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
              <p className="font-light">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                Productos
              </p>
              <p className="font-medium">{formatPrice(total)}</p>
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
                <p className="font-medium">{formatPrice(total)}</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-black text-white"
                  >
                    Pagar
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="min-w-max">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Revisa tus datos antes de realizar la compra
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex gap-2">
                      <div className="flex-1 border rounded-md px-2">
                        <ScrollArea className="h-[60vh]">
                          {cartItems.map((item, index) => (
                            <PayProduct item={item} key={index} />
                          ))}
                        </ScrollArea>
                      </div>
                      <div className="flex-1 p-4 border rounded-md">
                        <p className="font-semibold text-lg text-black">
                          Resumen compra
                        </p>
                        <Separator className="my-4" />
                        <div className="w-full flex justify-between">
                          <p>Total compra:</p>
                          <p className="font-semibold text-black">
                            {formatPrice(total)}
                          </p>
                        </div>

                        <div className="w-full flex flex-col justify-between mt-4">
                          <p>
                            Datos{" "}
                            <span className="font-semibold">vendedor</span>
                          </p>
                          <div className="border rounded-md p-4 w-full flex flex-col gap-2 mt-4">
                            <div className="w-full flex justify-between items-center">
                              <p>Nombre vendedor:</p>
                              <p className="font-medium text-black">Nómade</p>
                            </div>

                            <div className="w-full flex justify-between items-center">
                              <p>Telefono:</p>
                              <p className="font-medium text-black">
                                +2645168465
                              </p>
                            </div>

                            <div className="w-full flex justify-between items-center">
                              <p>Email contacto:</p>
                              <p className="font-medium text-black">
                                nomade@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col justify-between mt-4">
                          <p>
                            Datos{" "}
                            <span className="font-semibold">comprador</span>
                          </p>
                          <div className="border rounded-md p-4 w-full flex flex-col gap-2 mt-4">
                            <div className="w-full flex justify-between items-center">
                              <p>Nombre comprador:</p>
                              <p className="font-medium text-black">
                                {user.name} {user.lastName}
                              </p>
                            </div>

                            <div className="w-full flex justify-between items-center">
                              <p>Telefono:</p>
                              <p className="font-medium text-black">
                                +2643857651
                              </p>
                            </div>

                            <div className="w-full flex justify-between items-center">
                              <p>Dirección de envío:</p>
                              <p className="font-medium text-black">
                                {user.address}
                              </p>
                            </div>

                            <div className="w-full flex justify-between items-center">
                              <p>Email contacto:</p>
                              <p className="font-medium text-black">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-black hover:bg-accent shadow-none hover:text-accent-foreground">
                      Realizar compra
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
