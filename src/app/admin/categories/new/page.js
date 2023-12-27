"use client";

import { useState, React } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      console.log(
        "Nombre no puede estar vacio, mas adelante le ponemos un error como la gente"
      );
      return;
    }
    const res = await axios.post("/api/categories", {
      name,
    });
    router.push("/admin");
  }

  return (
    <section className="w-full min-h-screen mt-[80px] p-4 gap-4 flex justify-center items-center container mx-auto ">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="name">Nombre Categoria</Label>
          <Input
            type="text"
            id="name"
            placeholder="Nombre categoria"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button type="submit" variant="outline">
          Crear
        </Button>
      </form>
    </section>
  );
}
