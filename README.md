# Cairofy Backend

Cairofy is a music platform backend built with Node.js, TypeScript, Express, and Prisma ORM. It supports user authentication, song management, playlists, and more.

## Features

- User registration and authentication (with OTP support)
- Artist and listener roles
- Song upload and management (IPFS integration)
- Playlists and playlist management
- Song likes and favorites
- User subscriptions
- Artist metadata
- Platform and song statistics
- Swagger API documentation

## Tech Stack

- Node.js & TypeScript
- Express.js
- Prisma ORM (PostgreSQL)
- Jest (testing)
- Swagger (API docs)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd cairofy-backend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Set up your environment variables in a `.env` file (see `.env.example` if available).
4. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```
5. (Optional) Seed the database with demo data:
   ```bash
   npx ts-node prisma/seed.ts
   ```
6. Start the development server:
   ```bash
   yarn dev
   ```

## API Documentation

- Swagger UI is available at `/api-docs` when the server is running.

## Testing

Run tests with:

```bash
yarn test
```

## Project Structure

- `src/` - Main source code (controllers, routes, services, middlewares, helpers)
- `prisma/` - Prisma schema, migrations, and seed script
- `__tests__/` - Jest test files

## License

MIT
