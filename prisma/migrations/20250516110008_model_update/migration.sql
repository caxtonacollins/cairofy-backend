/*
  Warnings:

  - You are about to drop the `Song` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Song";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "wallet_address" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,
    "is_artist" BOOLEAN,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "songs" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "ipfs_hash" VARCHAR(255) NOT NULL,
    "preview_ipfs_hash" VARCHAR(255) NOT NULL,
    "price" DECIMAL(20,8) NOT NULL,
    "owner_id" UUID,
    "for_sale" BOOLEAN,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_subscriptions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "plan_type" VARCHAR(50) NOT NULL,
    "is_active" BOOLEAN,
    "start_date" TIMESTAMP,
    "end_date" TIMESTAMP,
    "amount" DECIMAL(10,2),

    CONSTRAINT "user_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artist_metadata" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "profile_image" VARCHAR(255),
    "bio" TEXT,
    "social_links" JSONB,
    "total_songs" INTEGER,
    "total_sales" INTEGER,

    CONSTRAINT "artist_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlists" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP,
    "song_count" INTEGER,

    CONSTRAINT "playlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist_songs" (
    "id" UUID NOT NULL,
    "playlist_id" UUID NOT NULL,
    "song_id" UUID NOT NULL,
    "position" INTEGER,

    CONSTRAINT "playlist_songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorite_songs" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "song_id" UUID NOT NULL,
    "added_at" TIMESTAMP,

    CONSTRAINT "favorite_songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liked_songs" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "song_id" UUID NOT NULL,
    "liked_at" TIMESTAMP,

    CONSTRAINT "liked_songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "song_stats" (
    "id" UUID NOT NULL,
    "song_id" UUID NOT NULL,
    "play_count" INTEGER,
    "favorite_count" INTEGER,
    "like_count" INTEGER,
    "last_played" TIMESTAMP,

    CONSTRAINT "song_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_stats" (
    "id" UUID NOT NULL,
    "total_songs" INTEGER,
    "total_users" INTEGER,
    "total_artists" INTEGER,
    "total_plays" INTEGER,
    "total_sales" INTEGER,
    "total_sales_volume" DECIMAL(20,8),
    "updated_at" TIMESTAMP,

    CONSTRAINT "platform_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_wallet_address_key" ON "users"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "artist_metadata_user_id_key" ON "artist_metadata"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "song_stats_song_id_key" ON "song_stats"("song_id");

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subscriptions" ADD CONSTRAINT "user_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artist_metadata" ADD CONSTRAINT "artist_metadata_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlists" ADD CONSTRAINT "playlists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlist_songs" ADD CONSTRAINT "playlist_songs_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlist_songs" ADD CONSTRAINT "playlist_songs_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_songs" ADD CONSTRAINT "favorite_songs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_songs" ADD CONSTRAINT "favorite_songs_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked_songs" ADD CONSTRAINT "liked_songs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked_songs" ADD CONSTRAINT "liked_songs_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "song_stats" ADD CONSTRAINT "song_stats_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
