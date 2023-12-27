"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Fondo from "../../../public/images/fondo-1.jpg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { PiMotorcycleFill } from "react-icons/pi";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    address: "",
  });

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChangeLogin = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleChangeRegister = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/login", formLogin);
    router.push("/");
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/register", formData);
    router.push("/");
  };

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
                <form onSubmit={handleSubmitLogin}>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="email@gmail.com"
                      onChange={handleChangeLogin}
                      name="email"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      placeholder="Contraseña"
                      type="password"
                      onChange={handleChangeLogin}
                      name="password"
                    />
                  </div>

                  <Button className="bg-black hover:bg-neutral-800 mt-4 w-full">
                    Iniciar Sesión
                  </Button>
                </form>
              </CardContent>
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
                <form onSubmit={handleSubmitRegister}>
                  <div className="space-y-1">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChangeRegister}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      onChange={handleChangeRegister}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      onChange={handleChangeRegister}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      onChange={handleChangeRegister}
                    />
                  </div>
                  <div className="space-y-1 ">
                    <Label htmlFor="address">Dirección</Label>
                    <Input
                      id="address"
                      type="text"
                      name="address"
                      onChange={handleChangeRegister}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChangeRegister}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="repeatPassword">Repetir contraseña</Label>
                    <Input
                      id="repeatPassword"
                      type="password"
                      name="repeatPassword"
                      onChange={handleChangeRegister}
                    />
                  </div>

                  <Button className="bg-black hover:bg-neutral-800 mt-4 w-full text-white">
                    Registrarse
                  </Button>
                </form>
              </CardContent>
              <CardFooter></CardFooter>
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
