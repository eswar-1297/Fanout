# Deployment Guide

This project has two parts that need to be deployed separately:

## 🎨 Frontend Deployment (Vercel)

### Step 1: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository: `eswar-1297/Fanout`
4. **Important Configuration:**
   - **Framework Preset:** Select **"Vite"**
   - **Root Directory:** Change from `./` to **`client`** (click Edit button)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `dist` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

5. Click **"Deploy"**

Your frontend will be live at: `https://your-project.vercel.app`

---

## 🚀 Backend Deployment (Render.com)

### Step 1: Deploy to Render

1. Go to [https://render.com](https://render.com) and sign in with GitHub
2. Click **"New +"** → **"Web Service"**
3. Select your repository: `eswar-1297/Fanout`
4. Configure the service:

   **Basic Settings:**
   - **Name:** `fanout-backend` (or any name you prefer)
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** Leave **blank** (uses repository root)
   - **Runtime:** `Node`

   **Build & Deploy:**
   - **Build Command:** 
     ```
     npm install && npm run build
     ```
   - **Start Command:**
     ```
     npm start
     ```

   **Environment Variables:**
   Click "Add Environment Variable" and add:
   - **Key:** `OPENAI_API_KEY`
   - **Value:** `your-openai-api-key-here`
   
   - **Key:** `PORT`
   - **Value:** `3001`

5. Click **"Create Web Service"**

Wait 5-10 minutes for the initial deployment. You'll get a URL like:
`https://fanout-backend-xyz.onrender.com`

---

## 🔗 Connect Frontend to Backend

### Option 1: Using Environment Variables (Recommended)

1. Create `client/.env.production`:
   ```env
   VITE_API_URL=https://your-backend.onrender.com
   ```

2. Update `client/src/App.tsx` to use environment variable:
   ```typescript
   const API_URL = import.meta.env.VITE_API_URL || '';
   
   const response = await fetch(`${API_URL}/api/fanout`, {
     // ... rest of the code
   });
   ```

3. Redeploy frontend on Vercel

### Option 2: Using Vercel Rewrites (Current Setup)

Your frontend is already configured to proxy API requests.

1. Go to your Vercel project settings
2. Go to "Settings" → "Environment Variables"
3. Add:
   - **Key:** `API_URL`
   - **Value:** `https://your-backend.onrender.com`

The `vite.config.ts` proxy will handle routing in development.

---

## ✅ Testing

1. **Test Backend:**
   ```bash
   curl -X POST https://your-backend.onrender.com/api/fanout \
     -H "Content-Type: application/json" \
     -d '{"main_query": "What is AI?", "max_fanouts": 5}'
   ```

2. **Test Frontend:**
   - Visit your Vercel URL
   - Enter a query and click "Generate Fanout Queries"

---

## 🐛 Troubleshooting

### Frontend Issues:
- **Build fails:** Check that Root Directory is set to `client`
- **API calls fail:** Check CORS settings in backend
- **Blank page:** Check browser console for errors

### Backend Issues:
- **Build fails:** Check that `npm run build` works locally
- **Deployment fails:** Check Render logs for errors
- **OpenAI errors:** Verify `OPENAI_API_KEY` is set correctly
- **Port errors:** Make sure `PORT` environment variable is set

### CORS Issues:
If you get CORS errors, update `src/index.ts`:
```typescript
app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

---

## 📝 Notes

- Render free tier may have cold starts (10-30 seconds on first request)
- Vercel deploys automatically on every push to `main` branch
- Update backend URL in frontend after backend deployment

