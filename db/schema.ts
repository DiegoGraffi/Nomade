import {
  int,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  varchar,
  serial,
  text,
} from "drizzle-orm/mysql-core";

// declaring enum in database
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
  email: text("email"),
  phone: text("phone"),
  password: text("password"),
  adress: text("adress"),
});

export const category = mysqlTable("category", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const cartItem = mysqlTable("cartItem", {
  id: serial("id").primaryKey(),
  name: text("name"),
  amount: int("amount"),
});
