# DSA Academy

A full-stack learning site for **Data Structures & Algorithms**: interactive lessons, multi-language examples, practice problems, roadmap, and user authentication backed by **MongoDB Atlas**.

---

## Features

- **Frontend**: Vanilla HTML/CSS/JS SPA-style navigation (home, DSA topics, languages, practice, roadmap).
- **Content**: Rich DSA topic data (C++, Java, Python snippets), interview-oriented notes, and editor challenges.
- **Auth**: Register / login with validation; passwords hashed on the server; JWT issued for authenticated requests.
- **Theming**: Light / dark mode with persistence.
- **Deployment**: Optimized for [Vercel](https://vercel.com) (static `client` + serverless `/api`).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript (no framework) |
| Backend (local) | Node.js, Express 5 |
| Backend (Vercel) | Serverless function (`api/index.js`) |
| Database | MongoDB Atlas via Mongoose |
| Auth | `bcryptjs`, `jsonwebtoken` |

---

## Repository Structure

```
DSA Website/
├── client/                 # Static frontend (entry: index.html)
│   ├── css/
│   ├── js/                 # app.js, data.js, router.js, theme.js
│   ├── pages/              # Optional HTML fragments
│   └── index.html
├── server/                 # Express app + shared modules (routes, models, DB)
│   ├── src/
│   │   ├── server.js       # Local API server (listen + MongoDB)
│   │   ├── config/db.js
│   │   ├── models/User.js
│   │   ├── middleware/auth.js
│   │   └── routes/authRoutes.js
│   ├── .env                # Local secrets (not committed)
│   ├── .env.example
│   └── package.json
├── api/
│   └── index.js            # Vercel serverless entry (imports server/*)
├── vercel.json             # Vercel routes (SPA + /api → api/index.js)
├── package.json            # Root deps for Vercel API installs
└── README.md
```

Static assets and scripts are loaded from **`/client/...`** paths so they work when the SPA is served from `/` on Vercel.

---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (comes with Node)
- **MongoDB Atlas** cluster and a database user with read/write access
- **Git** (for cloning / pushing to Vercel)

---

## Environment Variables

Create **`server/.env`** for local runs (copy from `server/.env.example` if present):

| Variable | Description |
|----------|-------------|
| `PORT` | Local server port (default `5000`) |
| `MONGODB_URI` | Full Atlas connection string (`mongodb+srv://...`) |
| `JWT_SECRET` | Long random string used to sign JWTs |

**Vercel**: In the project → **Settings → Environment Variables**, set the same **`MONGODB_URI`** and **`JWT_SECRET`** for Production (and Preview if needed). Do **not** commit `.env`.

### Atlas connection string tips

- Replace `<username>` / `<password>` with your database user.
- URL-encode special characters in the password (e.g. `@` → `%40`).
- Include a database name in the path, e.g. `...mongodb.net/dsaWebsite?retryWrites=true&w=majority`.
- In Atlas: **Network Access** must allow your IP (or `0.0.0.0/0` for development only).

---

## Local Development

### 1. Install dependencies

**API / shared code (server folder):**

```bash
cd server
npm install
```

**Root (used by Vercel; optional locally if you run serverless tooling):**

```bash
cd ..
npm install
```

### 2. Configure `.env`

In `server/.env`, set valid `MONGODB_URI` and `JWT_SECRET`.

### 3. Run the API server

```bash
cd server
npm run dev
```

- Health check: [http://localhost:5000/api/health](http://localhost:5000/api/health)  
- The Express app in `server/src/server.js` exposes **`/api`** only (no bundled static site).

### 4. View the frontend locally

The UI expects **`/api`** on the **same origin** as the page (see `client/js/app.js` → `API_BASE = '/api'`).

**Closest to production:** use the Vercel CLI from the **repository root**:

```bash
npx vercel dev
```

Then open the URL the CLI prints (same host for HTML and `/api`).

**Alternative:** serve `client` with any static server and point API calls to your backend (would require changing `API_BASE` to an absolute URL like `http://localhost:5000/api` and ensuring CORS is acceptable for your setup).

---

## API Reference

Base path: **`/api`**

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/health` | Liveness check |
| `POST` | `/api/auth/register` | Create account (`name`, `username`, `phone`, `email`, `password`) |
| `POST` | `/api/auth/login` | Login (`email`, `password`) → returns `token` + user (no password) |
| `GET` | `/api/auth/me` | Current user (header: `Authorization: Bearer <token>`) |

Example register body:

```json
{
  "name": "Ada Lovelace",
  "username": "ada_dev",
  "phone": "9876543210",
  "email": "ada@example.com",
  "password": "yourSecurePassword"
}
```

---

## Deploying on Vercel

1. Push this repo to GitHub (or connect your Git provider).
2. **New Project** → import the repository.
3. **Root directory**: keep the repo root (where `vercel.json` and `client/` live).
4. Add environment variables: **`MONGODB_URI`**, **`JWT_SECRET`**.
5. Deploy.

### Routing (see `vercel.json`)

- Static files under `/client/...` are served by the filesystem handler.
- **`/api/*`** is handled by `api/index.js` (serverless Express-style app).
- Other paths fall back to **`/client/index.html`** for SPA-style navigation.

After deploy, verify:

- `https://<your-project>.vercel.app/api/health`
- `https://<your-project>.vercel.app/` (main site)

---

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| Vercel `404 NOT_FOUND` at `/` | Missing `vercel.json`, wrong root directory, or assets not under `/client/...` |
| `querySrv ENOTFOUND` / DB errors | Invalid or placeholder `MONGODB_URI`; DNS/network; Atlas IP not allowed |
| Auth works locally, not on Vercel | Env vars not set on Vercel or old deployment without redeploy |
| `PathError` / route errors (Express) | Using patterns incompatible with Express 5 on a given host; keep `vercel.json` as in this repo |

---

## Scripts Summary

| Location | Command | Purpose |
|----------|---------|---------|
| `server/` | `npm run dev` | Start local Express API |
| `server/` | `npm start` | Same as `dev` (production-style local) |
| Repo root | `npx vercel dev` | Local full-stack similar to Vercel |

---

## License

Use and modify for your learning or product needs. Add a license file if you plan to open-source the project formally.

---

## Contributing

Issues and pull requests are welcome. Keep secrets out of Git; use environment variables and Vercel project settings only.
