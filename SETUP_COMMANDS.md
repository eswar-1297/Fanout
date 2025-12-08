# 🚀 Setup and Run Commands

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

Then install client dependencies:

```bash
cd client
npm install
cd ..
```

Or use the combined command:

```bash
npm run install:all
```

## Step 2: Environment is Already Set

Your `.env` file should already have the API key configured.

## Step 3: Run the Application

### Option A: Run Both Frontend and Backend Together (Recommended)

```bash
npm run dev
```

This will start:
- Backend API at: http://localhost:3001
- Frontend UI at: http://localhost:5173

### Option B: Run Backend and Frontend Separately

**Terminal 1 - Backend:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend:**
```bash
npm run dev:client
```

## Step 4: Open in Browser

Once running, open your browser to:
```
http://localhost:5173
```

## 🎯 Quick Test

Try these example queries:

1. **Technical**: "How do I implement OAuth2 authentication in a Node.js app?"
2. **Business**: "What is product-market fit?"
3. **AI**: "What are Large Language Models?"
4. **Web Development**: "How to optimize React app performance?"

## 📋 All Available Commands

```bash
# Install all dependencies
npm run install:all

# Development mode (runs both frontend and backend)
npm run dev

# Run backend only
npm run dev:server

# Run frontend only  
npm run dev:client

# Build for production
npm run build

# Start production server
npm start
```

## ⚠️ Troubleshooting

### "Cannot find module" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules client/node_modules
npm run install:all
```

### Port already in use
If port 3001 or 5173 is already in use, you can:
1. Stop other applications using those ports
2. Or change the ports in `.env` (for backend) and `client/vite.config.ts` (for frontend)

### API Key Issues
- Make sure `.env` file is in the root directory (not inside `src/` or `client/`)
- The file should contain: `OPENAI_API_KEY=your-key-here`
- Restart the server after adding/changing the API key

## 🎉 You're All Set!

Once the application is running, you should see:
- Console output showing server started on port 3001
- Vite dev server running on port 5173
- No error messages

Open http://localhost:5173 in your browser and start generating fanout queries!

## 📊 Expected Output

When you run `npm run dev`, you should see something like:

```
> fanout-query-generator@1.0.0 dev
> concurrently "npm run dev:server" "npm run dev:client"

[0] 
[0] > fanout-query-generator@1.0.0 dev:server
[0] > nodemon --exec ts-node src/index.ts
[0] 
[1] 
[1] > fanout-query-generator@1.0.0 dev:client
[1] > cd client && npm run dev
[1] 
[0] 🚀 Fanout Query Generator Server
[0] 📡 Server running on http://localhost:3001
[0] 🔗 API endpoint: http://localhost:3001/api/fanout
[0] ❤️  Health check: http://localhost:3001/health
[1] 
[1]   VITE v5.0.8  ready in 523 ms
[1] 
[1]   ➜  Local:   http://localhost:5173/
[1]   ➜  Network: use --host to expose
```

