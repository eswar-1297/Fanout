import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fanoutRouter from './routes/fanout';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Routes
app.use('/api', fanoutRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files from the React app (frontend)
const clientPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientPath));

// All other GET requests not handled by API should return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Fanout Query Generator Server`);
  console.log(`📡 Server running on http://localhost:${PORT}`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api/fanout`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
  console.log(`🎨 Serving frontend from: ${clientPath}\n`);
});

