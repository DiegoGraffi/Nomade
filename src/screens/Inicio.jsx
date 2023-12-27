import React from "react";
import Image from "next/image";
import img1 from "../../public/images/image01.png";
import img2 from "../../public/images/image02.png";
import img3 from "../../public/images/image03.png";
import img4 from "../../public/images/image04.png";
import img5 from "../../public/images/image05.jpg";
import img7 from "../../public/images/image07.jpg";
import img8 from "../../public/images/image08.jpg";
import img10 from "../../public/images/image10.jpg";
import img11 from "../../public/images/image11.jpg";
import hero from "../../public/images/hero.png";
import about from "../../public/images/about.png";
import history from "../../public/images/history.png";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  indumentaria,
  proteccion,
  accesorios,
  viajes,
  mantenimiento,
  tecnologia,
} from "@/lib/constants";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PiArrowDown } from "react-icons/pi";

const Inicio = () => {
  return (
    <div className="min-h-screen w-screen">
      <section className="flex flex-col items-center justify-center h-screen relative container mx-auto">
        <h1 className="font-bold text-[90px] text-center max-w-[800px] text-black uppercase">
          Get ready to hit the road
        </h1>
        <p className="font-light text-center max-w-[800px] mt-5 text-black">
          Sed ut finibus felis. Curabitur varius erat eget viverra iaculis. Sed
          et ante accumsan, varius neque sit amet, ullamcorper dolor. Maecenas
          ultricies massa at magna facilisis rhoncus.
        </p>
        <Image
          src={hero}
          width={1200}
          alt="hero-img"
          className="absolute -z-10 opacity-25"
        />
        <div className="rounded-full w-10 h-10 bg-black mt-[20px] mx-auto absolute bottom-14 flex justify-center items-center p-2 hover:scale-110 cursor-pointer transition-all duration-200 ease-in-out">
          <PiArrowDown color="white" size={25} />
        </div>
      </section>

      <section className="md:min-h-screen w-screen flex justify-center items-center p-[25px] overflow-hidden relative">
        <div>
          <Image src={about} className="md:hidden" />
        </div>
        <div className="hidden md:flex w-full h-full relative justify-center items-center min-w-[1000px] max-w-[1100px] overflow-hidden scale-[.55] md:scale-[.85] lg:scale-100">
          <Image src={img1} height={800} alt="img01" />
          <div className="bg-black border-opacity-50 w-[240px] flex justify-center items-center p-2 absolute bottom-[50%] left-[60%]">
            <p className="font-light text-sm text-white">
              Donec vehicula risus at porta fermentum.
            </p>
          </div>

          <Image
            src={img2}
            height={300}
            alt="img02"
            className="absolute bottom-[60%] left-[60%] origin-center hover:scale-110 hover:border-white hover:border-2 hover:rounded-md transition-all ease-in-out duration-300 "
          />
          <Image
            src={img3}
            height={400}
            alt="img03"
            className="absolute bottom-[25%] left-[10%] origin-center hover:scale-110 hover:border-white hover:border-2 hover:rounded-md transition-all ease-in-out duration-300 "
          />
          <div className="bg-white border-opacity-50 w-[270px] flex justify-center items-center p-2 absolute bottom-[15%] left-[10%]">
            <p className="font-light text-sm text-black">
              Aliquam vel quam a nisl cursus ornare quis ac mi.
            </p>
          </div>
          <Image
            src={img4}
            height={180}
            alt="img04"
            className="absolute bottom-[10%] left-[60%] origin-center hover:scale-110 hover:border-white hover:border-2 hover:rounded-md transition-all ease-in-out duration-300 "
          />
        </div>

        <div className="bg-black h-[35%] absolute bottom-0 w-screen -z-10"></div>
        <p className="absolute bottom-[25%] -z-10  uppercase text-[300px] font-black opacity-5 text-neutral-500">
          Nómade
        </p>
      </section>

      <section id="nosotros" className="min-h-screen w-screen flex flex-col">
        <div className="bg-black w-screen h-[90%] absolute -z-[100]"></div>
        <div className="container mx-auto p-[25px] relative md:mt-[25px]">
          <h3 className="text-white font-bold text-3xl uppercase">
            Nuestra Historia
          </h3>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-[25px] mt-[25px]">
            <p className="text-white text-sm text-justify flex-1 opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet libero lectus, id posuere lectus imperdiet luctus. Fusce
              vel lectus id eros viverra tincidunt. Maecenas id vehicula elit,
              eget fringilla ante. Nullam sit amet pharetra nunc. Sed hendrerit
              venenatis lacus, vitae egestas mauris lacinia a. Morbi vulputate
              augue quis metus pretium, quis scelerisque neque pharetra. Integer
              ac sagittis ipsum. Nam nec elit id enim ornare commodo. Praesent
              eget elit quis leo porttitor tincidunt. Aenean sodales a risus nec
              cursus.{" "}
            </p>

            <p className="text-white text-sm text-justify flex-1 opacity-60">
              Nulla dignissim nec mi eget tincidunt. Vivamus orci tortor,
              consectetur ac purus id, imperdiet dictum elit. Vestibulum eu
              mauris vitae velit maximus finibus. Nam ac enim quis elit
              fringilla sagittis id eu neque. Vivamus sed lectus erat. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur porta vitae lectus at mattis.
              Praesent quis accumsan tellus. Curabitur pharetra nulla vitae elit
              pellentesque, nec finibus leo luctus. Pellentesque nunc eros,
              feugiat id nisl vitae, rutrum placerat mi. Mauris vel nunc
              sodales, posuere dui eu, tempus dolor. Donec diam ante, viverra
              sed tristique quis, mollis id augue.
            </p>

            <p className="text-white text-sm text-justify flex-1 opacity-60">
              Donec dapibus elit ex, vehicula pellentesque est venenatis vel.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Integer sit amet pharetra elit.
              <br />
              <br />
              Fusce porttitor bibendum molestie. Curabitur imperdiet volutpat
              nisl a dapibus. Aenean vel volutpat nunc. Ut malesuada at risus et
              viverra. Nunc sit amet volutpat turpis. Nulla dignissim nec mi
              eget tincidunt. Vivamus orci tortor, consectetur ac purus id,
              imperdiet dictum elit. Vestibulum eu mauris vitae velit maximus
              finibus. Nam ac enim quis elit fringilla sagittis id eu neque.
            </p>
          </div>

          <div className="md:h-screen w-full flex justify-center items-center p-[25px] overflow-hidden relative mt-[50px]">
            <div>
              <Image src={history} className="md:hidden" />
            </div>
            <div className="hidden md:flex w-full h-full relative justify-center items-center min-w-[1000px] max-w-[1100px] overflow-hidden scale-[.55] md:scale-[.85] lg:scale-100">
              <Image src={img5} height={700} alt="img5" />
              <div className="bg-white border-opacity-50 w-[240px] flex justify-center items-center p-2 absolute bottom-[87%] left-[40%]">
                <p className="font-light text-sm text-black">
                  Donec vehicula risus at porta fermentum.
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={img8}
                  height={350}
                  alt="img08"
                  className="absolute bottom-[55%] left-[15%] origin-center hover:scale-110 hover:border-white hover:border-2 hover:rounded-md transition-all ease-in-out duration-300 "
                />
              </div>

              <Image
                src={img11}
                height={350}
                alt="img11"
                className="absolute bottom-[25%] left-[65%] origin-center hover:scale-110 hover:border-white hover:border-2 hover:rounded-md transition-all ease-in-out duration-300"
              />
              <div className="bg-black border-opacity-50 w-[270px] flex justify-center items-center p-2 absolute bottom-[15%] left-[65%]">
                <p className="font-light text-sm text-white">
                  Aliquam vel quam a nisl cursus ornare quis ac mi.
                </p>
              </div>
              <Image
                src={img10}
                height={200}
                alt="img10"
                className="absolute bottom-[5%] left-[10%] origin-center hover:scale-110 hover:border-white hover:border-2 hover:rounded-md transition-all ease-in-out duration-300 "
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="category"
        className="min-h-screen w-screen flex flex-col relative"
      >
        <div className="container mx-auto p-[25px] relative md:mt-[25px]">
          <h3 className="font-bold text-3xl uppercase">Categorias</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] my-[25px]">
            <p className="text-sm text-justify flex-1 opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet libero lectus, id posuere lectus imperdiet luctus. Fusce
              vel lectus id eros viverra tincidunt. Maecenas id vehicula elit,
              eget fringilla ante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 mt-[50px] gap-[25px]">
            <Card className="w-full rounded-lg">
              <CardContent className="p-0">
                <CardHeader>
                  <CardTitle>Indumentaria</CardTitle>
                  <CardDescription>
                    Ropa diseñada para proteger y brindar comodidad al conducir
                    tu motocicleta.
                  </CardDescription>
                </CardHeader>
                <Separator />

                <NavigationMenu className="mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {indumentaria.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="border flex h-[50px] items-center"
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenu>
              </CardContent>
            </Card>

            <Card className="w-full rounded-lg">
              <CardContent className="p-0">
                <CardHeader>
                  <CardTitle>Protección</CardTitle>
                  <CardDescription>
                    Elementos esenciales para la seguridad del motociclista,
                    como cascos y protectores.
                  </CardDescription>
                </CardHeader>
                <Separator />

                <NavigationMenu className="mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {proteccion.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="border flex h-[50px] items-center"
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenu>
              </CardContent>
            </Card>

            <Card className="w-full rounded-lg">
              <CardContent className="p-0">
                <CardHeader>
                  <CardTitle>Partes y accesorios</CardTitle>
                  <CardDescription>
                    Componentes para mejorar el rendimiento y mantenimiento de
                    la motocicleta.
                  </CardDescription>
                </CardHeader>
                <Separator />

                <NavigationMenu className="mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {accesorios.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="border flex h-[50px] items-center"
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenu>
              </CardContent>
            </Card>

            <Card className="w-full rounded-lg">
              <CardContent className="p-0">
                <CardHeader>
                  <CardTitle>Equipamiento para Viajes</CardTitle>
                  <CardDescription>
                    Productos diseñados para viajes largos en moto, como
                    sistemas de almacenamiento y navegación.
                  </CardDescription>
                </CardHeader>
                <Separator />

                <NavigationMenu className="mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {viajes.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="border flex h-[50px] items-center"
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenu>
              </CardContent>
            </Card>

            <Card className="w-full rounded-lg">
              <CardContent className="p-0">
                <CardHeader>
                  <CardTitle>Equipamiento para Mantenimiento</CardTitle>
                  <CardDescription>
                    Artículos necesarios para el cuidado y funcionamiento
                    adecuado de la motocicleta.
                  </CardDescription>
                </CardHeader>
                <Separator />

                <NavigationMenu className="mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {mantenimiento.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="border flex h-[50px] items-center"
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenu>
              </CardContent>
            </Card>

            <Card className="w-full rounded-lg">
              <CardContent className="p-0">
                <CardHeader>
                  <CardTitle>Tecnología y Seguridad</CardTitle>
                  <CardDescription>
                    Productos que integran tecnología para mejorar la seguridad
                    y experiencia de conducción.
                  </CardDescription>
                </CardHeader>
                <Separator />

                <NavigationMenu className="mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {tecnologia.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="border flex h-[50px] items-center"
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenu>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="min-h-screen w-screen relative overflow-hidden p-6 md:p-10"
      >
        <div className="container mx-auto min-h-screen relative flex justify-center items-center">
          <Image src={img7} fill className="object-cover rounded-3xl" />
          <div className="bg-white rounded-md absolute z-20 p-5 ">
            <p className="text-[80px] md:text-[120px] lg:text-[150px]">
              Contacto
            </p>
            <Separator className="my-4" />
            <div className="w-full flex flex-col gap-4">
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="name">Nombre y Apellido</Label>
                <Input type="text" id="name" placeholder="Nombre y apellido" />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full gap-3">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  className="resize-none"
                  placeholder="Escribe tu mensaje aquí."
                  rows="5"
                />
                <Button className="bg-black">Enviar mensaje</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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

export default Inicio;
