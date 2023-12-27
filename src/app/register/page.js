"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Fondo from "../../../public/images/fondo-1.jpg";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { PiMotorcycleFill } from "react-icons/pi";

export default function Register() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="w-screen min-h-screen flex ">
        <Tabs
          defaultValue="account"
          className="w-[100%] md:w-[60%] lg:w-[40%] min-w-[300px] md:max-w-[600px] p-[25px] flex flex-col justify-center items-center"
        >
          <div className="md:hidden">
            <PiMotorcycleFill size={80} className="mb-4" color="blakc" />
          </div>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardDescription>
                  ¡Bienvenido! Estamos encantados de verte de nuevo. Por favor,
                  ingresa tus credenciales para acceder a tu cuenta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="email@gmail.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    placeholder="Contraseña"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-black hover:bg-neutral-600">
                  Iniciar Sesión
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardDescription>
                  Únete a nuestra comunidad. Completa los detalles a
                  continuación para crear tu cuenta personalizada y comenzar tu
                  viaje con nosotros.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="emailR">Email</Label>
                  <Input id="emailR" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" />
                </div>
                <div className="space-y-1 ">
                  <Label htmlFor="date">Fecha de Nacimiento</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="passwordR">Contraseña</Label>
                  <Input id="apellido" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="repeatPaswwordR">Repetir contraseña</Label>
                  <Input id="repeatPaswwordR" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-black hover:bg-neutral-600">
                  Registrarse
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="relative flex-1 w-[60%]">
          <Image src={Fondo} fill className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
}
