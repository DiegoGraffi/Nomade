"use client";

import { useState, React } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import AdminProduct from "../../components/AdminProduct";
import axios from "axios";
import Link from "next/link";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useSuspenseQuery } from "@tanstack/react-query";

const Admin = () => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/productos").then((res) => res.json()),
  });

  const { data: categories } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("/api/categories").then((res) => res.json()),
  });
  return (
    <section className="w-full min-h-screen mt-[80px] p-4 gap-4 flex justify-center items-center container mx-auto ">
      <div className="flex flex-col p-4 border rounded-md w-max">
        <p className="text-[36px] md:text-[64px] lg:text-[80px]">
          Panel Administrador
        </p>
        <Separator className="my-4" />
        <ul>
          <Link href="/admin/products/new">
            <li>Nuevo producto</li>
          </Link>
          <Link href="/admin/categories/new">
            <li>nueva categoria</li>
          </Link>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <h1>Productos</h1>
        </CardHeader>
        <CardBody>
          {products.map((product) => (
            <Link href={"/admin/products/" + product.id}>
              <li>{product.name}</li>
            </Link>
          ))}
        </CardBody>
      </Card>
    </section>
  );
};

export default Admin;
