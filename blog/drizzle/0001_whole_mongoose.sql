CREATE TABLE `file_tracks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`file_path` text NOT NULL,
	`hash` text NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `file_tracks_file_path_unique` ON `file_tracks` (`file_path`);--> statement-breakpoint
ALTER TABLE `posts` ADD `slug` text NOT NULL;--> statement-breakpoint
ALTER TABLE `posts` ADD `tags_json` text DEFAULT '[]' NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);