# 🚀 Quick Start Guide

Get up and running with the Fanout Query Generator in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation Steps

### 1. Install Dependencies

```bash
# Install all dependencies (root, server, and client)
npm run install:all
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and add your OpenAI API key:

```env
OPENAI_API_KEY=sk-your-actual-api-key-here
PORT=3001
NODE_ENV=development
```

### 3. Start the Application

```bash
# Run both backend and frontend
npm run dev
```

This will start:
- **Backend API**: http://localhost:3001
- **Frontend UI**: http://localhost:5173

### 4. Use the Application

Open your browser to http://localhost:5173 and:

1. Enter a query like: "How do I implement OAuth2 authentication in a Node.js app?"
2. (Optional) Set domain to "technical"
3. (Optional) Set max fanouts to 10
4. Click "Generate Fanout Queries"
5. View your generated sub-queries!

## Testing the API Directly

You can also test the API using cURL:

```bash
curl -X POST http://localhost:3001/api/fanout \
  -H "Content-Type: application/json" \
  -d '{
    "main_query": "What is machine learning?",
    "domain": "technical",
    "max_fanouts": 8
  }'
```

## Example Queries to Try

1. **Technical**: "How do I optimize React app performance?"
2. **Business**: "What is product-market fit and how do I achieve it?"
3. **Research**: "What is quantum computing?"
4. **Health**: "How does intermittent fasting affect health?"
5. **AI**: "What are Large Language Models?"

## Common Issues

### "OPENAI_API_KEY is not set"
- Make sure you created the `.env` file in the root directory
- Make sure your API key is correct and starts with `sk-`
- Restart the server after adding the API key

### Port already in use
- Change the PORT in `.env` (backend)
- Change the port in `client/vite.config.ts` (frontend)

### Module not found errors
- Run `npm run install:all` again
- Make sure you're in the root directory

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Check out [EXAMPLES.md](EXAMPLES.md) for more query examples
- Customize the system prompt in `src/services/fanout.ts`
- Adjust the LLM model in `src/config/openai.ts`

## Development Commands

```bash
# Run both frontend and backend
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

## Project Structure Overview

```
fanout/
├── src/              # Backend (Node.js + Express)
├── client/           # Frontend (React + Vite)
├── .env             # Your API keys (create this)
├── package.json     # Root dependencies
└── README.md        # Full documentation
```

## Getting Help

- Check [README.md](README.md) for detailed documentation
- Review [EXAMPLES.md](EXAMPLES.md) for query examples
- Open an issue if you encounter problems

Happy querying! 🎉

