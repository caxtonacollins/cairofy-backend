/**
 * User-related types and interfaces
 */

export interface User {
    id: string;
    walletAddress: string;
    username?: string | null;
    email?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    isArtist?: boolean | null;
}

export interface CreateUserDto {
    walletAddress: string;
    username?: string;
    email?: string;
}

export interface UpdateUserDto {
    username?: string;
    email?: string;
    isArtist?: boolean;
}

export interface UserWithRelations extends User {
    songs?: SongResponse[];
    artistMetadata?: ArtistMetadataResponse | null;
    playlists?: PlaylistResponse[];
}

interface ArtistMetadataResponse {
    id: string;
    profileImage?: string | null;
    bio?: string | null;
    socialLinks?: Record<string, string> | null;
    totalSongs?: number | null;
    totalSales?: number | null;
}

// Minimal related types needed for user operations
interface SongResponse {
    id: string;
    name: string;
    ipfsHash: string;
    previewIpfsHash: string;
    price: number;
    forSale?: boolean | null;
}

interface PlaylistResponse {
    id: string;
    name: string;
    description?: string | null;
    songCount?: number | null;
}