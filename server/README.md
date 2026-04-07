# DSA Website Backend (Node.js + MongoDB Atlas)

## Setup

1. Copy `.env.example` to `.env`
2. Fill `MONGODB_URI` with your MongoDB Atlas connection string
3. Set `JWT_SECRET` to a secure random value
4. Install dependencies:
   - `npm install`
5. Start server:
   - `npm run dev`

The backend serves:
- API: `/api/*`
- Frontend static app from `../client`

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (requires `Authorization: Bearer <token>`)
