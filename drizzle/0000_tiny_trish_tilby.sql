CREATE TABLE `cartItem` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`amount` int,
	CONSTRAINT `cartItem_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `category` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`price` int,
	`description` text,
	`stock` int,
	`image` text,
	`category_id` int,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`lastName` text,
	`email` text,
	`phone` text,
	`password` text,
	`adress` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
