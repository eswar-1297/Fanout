# 🔍 Fanout Query Generator

An AI-powered tool that transforms complex natural-language queries into comprehensive sets of search sub-queries. Built with React, Node.js, TypeScript, and OpenAI.

Inspired by [Dejan's Fanout Tool](https://dejan.ai/tools/fanout/).

## ✨ Features

- **Intelligent Query Decomposition**: Breaks down complex questions into targeted sub-queries
- **Category-based Organization**: Automatically categorizes queries (core facts, background, comparisons, edge cases, implementation, evaluation, follow-up)
- **Modern UI**: Beautiful, responsive interface with dark mode
- **Copy & Export**: Easy copying of individual or all queries, plus JSON export
- **Domain Customization**: Optional domain specification for context-aware generation
- **Configurable Output**: Control the number of fanout queries (1-20)

## 🏗️ Architecture

### Backend (Node.js + TypeScript)
- **Express.js** REST API
- **OpenAI API** integration for LLM-powered query generation
- **Zod** for request validation
- Clean, modular service architecture

### Frontend (React + TypeScript)
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Lucide React** for icons
- Responsive, modern UI with gradient accents

## 📋 Prerequisites

- Node.js 18+ and npm
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## 🚀 Getting Started

### 1. Clone and Install

```bash
# Install root dependencies
npm install

# Install both server and client dependencies
npm run install:all
```

### 2. Configure Environment

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
NODE_ENV=development
```

### 3. Run the Application

#### Development Mode (Recommended)

Runs both backend and frontend concurrently:

```bash
npm run dev
```

- **Backend**: http://localhost:3001
- **Frontend**: http://localhost:5173

#### Production Mode

```bash
# Build both backend and frontend
npm run build

# Start production server
npm start
```

## 📡 API Reference

### POST `/api/fanout`

Generate fanout queries from a main query.

**Request Body:**

```json
{
  "main_query": "How do I implement OAuth2 authentication in a Node.js app?",
  "domain": "technical",
  "max_fanouts": 10
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `main_query` | string | Yes | The main question to decompose |
| `domain` | string | No | Context domain (e.g., "technical", "marketing", "research") |
| `max_fanouts` | number | No | Maximum queries to generate (1-20, default: 10) |

**Response:**

```json
{
  "main_query": "How do I implement OAuth2 authentication in a Node.js app?",
  "domain": "technical",
  "fanouts": [
    {
      "id": "f1",
      "category": "core_facts",
      "purpose": "Understand the basic concept and definition",
      "query": "What is OAuth2 authentication and how does it work?"
    },
    {
      "id": "f2",
      "category": "implementation",
      "purpose": "Find practical implementation steps",
      "query": "Step-by-step guide to implement OAuth2 in Node.js"
    }
    // ... more fanout queries
  ]
}
```

### Query Categories

The system generates queries across these categories:

- **core_facts**: Definitions, key concepts, components
- **background**: History, evolution, importance
- **comparisons**: Alternatives, pros/cons, tradeoffs
- **edge_cases**: Pitfalls, risks, constraints, failure scenarios
- **implementation**: Step-by-step guides, tools, frameworks
- **evaluation**: Metrics, KPIs, success measurement
- **follow_up**: Next steps, advanced topics

## 🎯 Example Usage

### Example 1: Technical Query

**Input:**
```json
{
  "main_query": "How to optimize React app performance?",
  "domain": "technical",
  "max_fanouts": 8
}
```

**Expected Fanouts:**
- What are the main performance bottlenecks in React applications?
- How does React's virtual DOM affect performance?
- Best practices for React component memoization
- How to implement code splitting in React apps?
- Tools for measuring React app performance
- Common performance anti-patterns in React
- ...

### Example 2: Business Query

**Input:**
```json
{
  "main_query": "What is product-market fit?",
  "domain": "marketing",
  "max_fanouts": 10
}
```

**Expected Fanouts:**
- Definition of product-market fit
- History and origin of product-market fit concept
- How to measure product-market fit?
- Product-market fit vs market validation
- Signs of achieving product-market fit
- Common mistakes when seeking product-market fit
- ...

## 📁 Project Structure

```
fanout/
├── src/                      # Backend source code
│   ├── config/
│   │   └── openai.ts        # OpenAI client configuration
│   ├── types/
│   │   └── fanout.ts        # TypeScript interfaces
│   ├── services/
│   │   └── fanout.ts        # Core LLM logic
│   ├── routes/
│   │   └── fanout.ts        # API routes
│   └── index.ts             # Server entry point
├── client/                   # Frontend source code
│   ├── src/
│   │   ├── App.tsx          # Main React component
│   │   ├── App.css          # Component styles
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── vite.config.ts       # Vite configuration
│   └── package.json         # Frontend dependencies
├── package.json             # Root dependencies
├── tsconfig.json            # TypeScript config (backend)
└── README.md                # This file
```

## 🔧 Configuration

### LLM Model Selection

Edit `src/config/openai.ts` to change the model:

```typescript
export const LLM_MODEL = 'gpt-4-turbo-preview'; // or 'gpt-3.5-turbo'
```

### System Prompt Customization

Modify the system prompt in `src/services/fanout.ts` to adjust the LLM's behavior:

```typescript
const SYSTEM_PROMPT = `You are an AI search orchestrator...`;
```

### Port Configuration

Change ports in:
- Backend: `.env` file (`PORT=3001`)
- Frontend: `client/vite.config.ts` (`port: 5173`)

## 🧪 Testing the API

### Using cURL

```bash
curl -X POST http://localhost:3001/api/fanout \
  -H "Content-Type: application/json" \
  -d '{
    "main_query": "What is machine learning?",
    "domain": "technical",
    "max_fanouts": 5
  }'
```

### Using the Web UI

1. Open http://localhost:5173
2. Enter your main query
3. Optionally specify domain and max fanouts
4. Click "Generate Fanout Queries"
5. Copy individual queries or export all as JSON

## 🎨 UI Features

- **Gradient Design**: Modern gradient accents and glassmorphism effects
- **Category Colors**: Each category has a distinct color for easy identification
- **Copy Functionality**: One-click copy for individual queries or all at once
- **JSON Export**: Download results as JSON for further processing
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode**: Eye-friendly dark theme with smooth transitions

## 🛠️ Development

### Backend Development Only

```bash
npm run dev:server
```

### Frontend Development Only

```bash
npm run dev:client
```

### Building

```bash
# Build backend
npm run build

# Build frontend
cd client && npm run build
```

## 🔍 How It Works

1. **User Input**: User provides a main query, optional domain, and max fanouts
2. **API Request**: Frontend sends POST request to `/api/fanout`
3. **Validation**: Backend validates input using Zod schema
4. **LLM Processing**: 
   - System prompt instructs the LLM to act as a "search orchestrator"
   - User query is formatted with context
   - OpenAI API generates structured fanout queries
5. **Categorization**: LLM automatically assigns categories to each query
6. **Response**: Backend returns JSON with categorized fanout queries
7. **Display**: Frontend renders results in an organized, interactive format

## 🎓 Prompt Engineering

The system uses a carefully crafted prompt that:
- Instructs the LLM to act as a search orchestrator, not an answerer
- Defines clear categories for comprehensive coverage
- Emphasizes standalone, search-engine-friendly queries
- Ensures no repetition of the main query
- Provides structured JSON output

## 🚨 Error Handling

- Input validation with detailed error messages
- API error responses with appropriate status codes
- User-friendly error display in the UI
- Console logging for debugging

## 📝 License

MIT

## 🙏 Credits

- Inspired by [Dejan's Fanout Tool](https://dejan.ai/tools/fanout/)
- Powered by [OpenAI](https://openai.com/)
- Built with [React](https://react.dev/), [Node.js](https://nodejs.org/), and [TypeScript](https://www.typescriptlang.org/)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Support

For issues or questions, please open an issue on the repository.

---

Made with ❤️ by developers, for developers

