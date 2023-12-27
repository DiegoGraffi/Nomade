import {
  int,
  mysqlTable,
  varchar,
  serial,
  text,
  boolean,
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  price: int("price"),
  description: text("description"),
  stock: int("stock"),
  image: text("image"),
  category_id: int("category_id"),
});

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  lastName: text("lastName"),
  email: varchar("email", { length: 255 }).unique(),
  phone: text("phone"),
  password: text("password"),
  address: text("address"),
  admin: boolean("admin").default(false),
});

export const category = mysqlTable("category", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const cartItem = mysqlTable("cartItem", {
  id: serial("id").primaryKey(),
  quantity: int("quantity"),
  product_id: int("product_id"),
  user_id: int("user_id"),
});
