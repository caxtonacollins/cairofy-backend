import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // USERS
    const alice = await prisma.user.upsert({
        where: { walletAddress: '0xalice' },
        update: {},
        create: {
            walletAddress: '0xalice',
            username: 'alice',
            email: 'alice@example.com',
            isArtist: true,
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2025-05-16'),
        },
    });
    const bob = await prisma.user.upsert({
        where: { walletAddress: '0xbob' },
        update: {},
        create: {
            walletAddress: '0xbob',
            username: 'bob',
            email: 'bob@example.com',
            isArtist: false,
            createdAt: new Date('2024-02-01'),
            updatedAt: new Date('2025-05-16'),
        },
    });
    const carol = await prisma.user.upsert({
        where: { walletAddress: '0xcarol' },
        update: {},
        create: {
            walletAddress: '0xcarol',
            username: 'carol',
            email: 'carol@example.com',
            isArtist: true,
            createdAt: new Date('2024-03-01'),
            updatedAt: new Date('2025-05-16'),
        },
    });

    // ARTIST METADATA
    await prisma.artistMetadata.upsert({
        where: { userId: alice.id },
        update: {},
        create: {
            userId: alice.id,
            profileImage: 'https://example.com/alice.png',
            bio: 'Electronic music producer.',
            socialLinks: { twitter: 'https://twitter.com/alice' },
            totalSongs: 2,
            totalSales: 5,
        },
    });
    await prisma.artistMetadata.upsert({
        where: { userId: carol.id },
        update: {},
        create: {
            userId: carol.id,
            profileImage: 'https://example.com/carol.png',
            bio: 'Indie singer-songwriter.',
            socialLinks: { instagram: 'https://instagram.com/carol' },
            totalSongs: 1,
            totalSales: 2,
        },
    });

    // SONGS
    const song1 = await prisma.song.create({
        data: {
            name: 'Sunrise',
            ipfsHash: 'QmSunrise',
            previewIpfsHash: 'QmPreviewSunrise',
            price: 1.25,
            ownerId: alice.id,
            forSale: true,
            createdAt: new Date('2024-04-01'),
            updatedAt: new Date('2025-05-16'),
        },
    });
    const song2 = await prisma.song.create({
        data: {
            name: 'Night Drive',
            ipfsHash: 'QmNightDrive',
            previewIpfsHash: 'QmPreviewNightDrive',
            price: 2.5,
            ownerId: alice.id,
            forSale: false,
            createdAt: new Date('2024-04-10'),
            updatedAt: new Date('2025-05-16'),
        },
    });
    const song3 = await prisma.song.create({
        data: {
            name: 'Indie Heart',
            ipfsHash: 'QmIndieHeart',
            previewIpfsHash: 'QmPreviewIndieHeart',
            price: 1.75,
            ownerId: carol.id,
            forSale: true,
            createdAt: new Date('2024-05-01'),
            updatedAt: new Date('2025-05-16'),
        },
    });

    // PLAYLISTS
    const playlist1 = await prisma.playlist.create({
        data: {
            userId: bob.id,
            name: 'Bob’s Favorites',
            description: 'A mix of my favorite tracks.',
            createdAt: new Date('2025-05-01'),
            songCount: 2,
            songs: {
                create: [
                    { songId: song1.id, position: 1 },
                    { songId: song3.id, position: 2 },
                ],
            },
        },
    });
    const playlist2 = await prisma.playlist.create({
        data: {
            userId: alice.id,
            name: 'Chill Vibes',
            description: 'Relaxing tunes.',
            createdAt: new Date('2025-05-10'),
            songCount: 1,
            songs: {
                create: [
                    { songId: song2.id, position: 1 },
                ],
            },
        },
    });

    // USER SUBSCRIPTIONS
    await prisma.userSubscription.create({
        data: {
            userId: bob.id,
            planType: 'premium',
            isActive: true,
            startDate: new Date('2025-01-01'),
            endDate: new Date('2026-01-01'),
            amount: 9.99,
        },
    });

    // FAVORITE SONGS
    await prisma.favoriteSong.create({
        data: {
            userId: bob.id,
            songId: song1.id,
            addedAt: new Date('2025-05-12'),
        },
    });
    await prisma.favoriteSong.create({
        data: {
            userId: bob.id,
            songId: song3.id,
            addedAt: new Date('2025-05-13'),
        },
    });

    // LIKED SONGS
    await prisma.likedSong.create({
        data: {
            userId: bob.id,
            songId: song1.id,
            likedAt: new Date('2025-05-14'),
        },
    });
    await prisma.likedSong.create({
        data: {
            userId: alice.id,
            songId: song3.id,
            likedAt: new Date('2025-05-15'),
        },
    });

    // SONG STATS
    await prisma.songStats.create({
        data: {
            songId: song1.id,
            playCount: 100,
            favoriteCount: 10,
            likeCount: 8,
            lastPlayed: new Date('2025-05-16'),
        },
    });
    await prisma.songStats.create({
        data: {
            songId: song2.id,
            playCount: 50,
            favoriteCount: 5,
            likeCount: 3,
            lastPlayed: new Date('2025-05-15'),
        },
    });
    await prisma.songStats.create({
        data: {
            songId: song3.id,
            playCount: 75,
            favoriteCount: 7,
            likeCount: 6,
            lastPlayed: new Date('2025-05-14'),
        },
    });

    // PLATFORM STATS
    await prisma.platformStats.create({
        data: {
            totalSongs: 3,
            totalUsers: 3,
            totalArtists: 2,
            totalPlays: 225,
            totalSales: 7,
            totalSalesVolume: 5.5,
            updatedAt: new Date('2025-05-16'),
        },
    });

    console.log({ alice, bob, carol, song1, song2, song3, playlist1, playlist2 });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
