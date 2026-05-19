import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', healthRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🤖 IPET 66 TecnoLingo Backend corriendo en http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});

export default app;
