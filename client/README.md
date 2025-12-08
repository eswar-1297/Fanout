# Fanout Query Generator - Frontend

This is the frontend React application for the Fanout Query Generator.

## Deployment on Vercel

### Steps:

1. Go to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `eswar-1297/Fanout`
4. Configure the project:
   - **Framework Preset:** Vite
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Click "Deploy"

## Backend Setup

The frontend needs a backend API. Deploy the backend separately:

1. Deploy to [Render.com](https://render.com) or [Railway.app](https://railway.app)
2. Once deployed, you'll get a backend URL (e.g., `https://your-backend.onrender.com`)
3. Update the API proxy in `vite.config.ts` or create environment variable

## Environment Variables

No environment variables needed for the frontend (API calls use relative paths `/api/*`).

## Local Development

```bash
npm install
npm run dev
```

The dev server will proxy `/api/*` requests to `http://localhost:3001`.

