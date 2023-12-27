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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { PiMotorcycleFill } from "react-icons/pi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";

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
            <LoginCard />
          </TabsContent>
          <TabsContent value="password">
            <RegisterCard />
          </TabsContent>
        </Tabs>
        <div className="relative flex-1 w-[60%]">
          <Image src={Fondo} fill className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function LoginCard() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values) {
    try {
      const res = await axios.post("/api/login", values);
      router.push("/");
    } catch (error) {
      console.error("Error en inicio de sesión:", error);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardDescription>
          ¡Bienvenido! Estamos encantados de verte de nuevo. Por favor, ingresa
          tus credenciales para acceder a tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="email@gmail.com"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email?.message && (
              <span className="text-red-500 text-xs">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              placeholder="Contraseña"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
            {errors.password?.message && (
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>

          <Button
            className="bg-black hover:bg-neutral-800 mt-4 w-full"
            type="submit"
          >
            Iniciar Sesión
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function RegisterCard() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  async function handleRegister(values) {
    try {
      const res = await axios.post("/api/register", values);
      if (res.data && !res.data.error) {
        router.push("/");
      } else {
        console.error("Error en registro:", res.data.error);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.map((validationError) => {
          setError(validationError.path[0], {
            type: "manual",
            message: validationError.message,
          });
        });
      } else {
        console.error("Error en registro:", error);
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Únete a nuestra comunidad. Completa los detalles a continuación para
          crear tu cuenta personalizada y comenzar tu viaje con nosotros.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="space-y-1">
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name?.message && (
              <span className="text-red-500 text-xs">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.message && (
              <span className="text-red-500 text-xs">
                {errors.lastName?.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email?.message && (
              <span className="text-red-500 text-xs">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone?.message && (
              <span className="text-red-500 text-xs">
                {errors.phone?.message}
              </span>
            )}
          </div>
          <div className="space-y-1 ">
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              type="text"
              {...register("address", { required: true })}
            />
            {errors.address?.message && (
              <span className="text-red-500 text-xs">
                {errors.address?.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password?.message && (
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="repeatPassword">Repetir contraseña</Label>
            <Input
              id="repeatPassword"
              type="password"
              {...register("repeatPassword", { required: true })}
            />
            {errors.repeatPassword?.message && (
              <span className="text-red-500 text-xs">
                {errors.repeatPassword?.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            className="bg-black hover:bg-neutral-800 mt-4 w-full text-white"
          >
            Registrarse
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
