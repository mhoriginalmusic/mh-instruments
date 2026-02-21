CREATE TABLE `beatPurchases` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`beatId` int NOT NULL,
	`stripePaymentIntentId` varchar(255),
	`amount` decimal(10,2) NOT NULL,
	`status` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `beatPurchases_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `beats` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`genre` varchar(100) NOT NULL,
	`bpm` int,
	`price` decimal(10,2) NOT NULL,
	`audioUrl` text,
	`audioKey` varchar(500),
	`previewUrl` text,
	`previewKey` varchar(500),
	`coverArtUrl` text,
	`coverArtKey` varchar(500),
	`description` text,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `beats_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contentSettings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(255) NOT NULL,
	`value` longtext,
	`type` enum('text','number','json') NOT NULL DEFAULT 'text',
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contentSettings_id` PRIMARY KEY(`id`),
	CONSTRAINT `contentSettings_key_unique` UNIQUE(`key`)
);
--> statement-breakpoint
CREATE TABLE `customMusicOrders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`genre` varchar(100) NOT NULL,
	`specifications` longtext,
	`rawMelodyUrl` text,
	`rawMelodyKey` varchar(500),
	`finalTrackUrl` text,
	`finalTrackKey` varchar(500),
	`price` decimal(10,2) NOT NULL,
	`stripePaymentIntentId` varchar(255),
	`status` enum('pending_payment','payment_confirmed','in_progress','completed','cancelled') NOT NULL DEFAULT 'pending_payment',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `customMusicOrders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `earnings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`releaseId` int,
	`beatPurchaseId` int,
	`customOrderId` int,
	`amount` decimal(10,2) NOT NULL,
	`type` enum('music_release','beat_sale','custom_order') NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `earnings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `musicReleases` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`artist` varchar(255) NOT NULL,
	`composer` varchar(255),
	`lyricist` varchar(255),
	`genre` varchar(100) NOT NULL,
	`language` varchar(50) NOT NULL,
	`label` varchar(255) NOT NULL DEFAULT 'MH Original Music',
	`coverArtUrl` text,
	`coverArtKey` varchar(500),
	`status` enum('draft','in_moderation','released','rejected','deleted') NOT NULL DEFAULT 'draft',
	`releaseDate` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `musicReleases_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `musicTracks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`releaseId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`duration` int,
	`audioUrl` text,
	`audioKey` varchar(500),
	`format` varchar(10),
	`fileSize` int,
	`trackNumber` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `musicTracks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `withdrawals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`amount` decimal(10,2) NOT NULL,
	`method` enum('binance','payoneer') NOT NULL,
	`walletAddress` varchar(500),
	`payoneerEmail` varchar(320),
	`status` enum('pending','approved','rejected','completed') NOT NULL DEFAULT 'pending',
	`transactionId` varchar(255),
	`rejectionReason` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `withdrawals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `subscriptionPlan` enum('free','pro') DEFAULT 'free' NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `stripeCustomerId` varchar(255);