# closqtrs-app

Learning project for practising a modern workflow: a React + Vite frontend, an Express API stub and Docker Compose for VPS deployment. This is not the production ClosQtrs portal; that is `../ClosQtrs`.

## Stack

- `frontend/`: React 18, Vite, React Router, ESLint.
- `backend/index.js`: Express API stub (port 3000).
- `docker-compose.yml`: `closqtrs-api` (backend) and `closqtrs-web` (Nginx serving the built frontend on port 80, proxying `/api/` to `api:3000`, see `frontend/docker-nginx.conf`).

## Running locally

```bash
cd frontend && npm install && npm run dev     # Vite dev server
cd backend && npm install && npm run dev      # nodemon on port 3000
docker compose up --build                     # full stack on http://localhost
```

Copy `.env.example` to `.env` first.

## Testing

There are no tests. `cd frontend && npm run lint` runs ESLint.

## Related repos

All repos live as siblings in one `Code` folder, so these paths are relative to this repo.

- `../ClosQtrs`: the real ClosQtrs portal (GitHub `ClosQtrs-Portal`), deployed on the shared VPS.
