import { z } from "zod";

export const userSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "El nombre debe contener como minimo 3 caracteres",
      })
      .max(100, {
        message: "El nombre debe contener menos de 100 caracteres",
      }),
    lastName: z
      .string()
      .min(3, {
        message: "El apellido debe contener como minimo 3 caracteres",
      })
      .max(100, {
        message: "El apellido debe contener menos de 100 caracteres",
      }),
    email: z.string().email({
      message: "Ingresa un correo valido",
    }),
    phone: z.string().refine((phone) => !isNaN(parseInt(phone)), {
      message: "El telefono debe ser un número",
    }),
    address: z
      .string()
      .min(5, {
        message: "La dirección debe contener como minimo 5 caracteres",
      })
      .max(200, {
        message: "La dirección debe contener menos de 200 caracteres",
      }),
    password: z
      .string()
      .min(6, {
        message: "La contraseña debe contener como minimo 6 caracteres",
      })
      .max(100, {
        message: "La contraseña debe contener menos de 100 caracteres",
      }),
    repeatPassword: z
      .string()
      .min(6, {
        message: "La contraseña debe contener como minimo 6 caracteres",
      })
      .max(100, {
        message: "La contraseña debe contener menos de 100 caracteres",
      }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Las contraseñas deben coincidir",
    path: ["repeatPassword"],
  });
