import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', app: 'APP-BALSE-QUIZ API IPET 66' });
});

// Placeholder routes for future API endpoints
app.get('/api/curriculum', (_req, res) => {
  res.json({ message: 'Curriculum data endpoint ready' });
});

app.get('/api/leaderboard', (_req, res) => {
  res.json({ message: 'Leaderboard endpoint ready' });
});

app.listen(PORT, () => {
  console.log(`🚀 IPET 66 Backend running on http://localhost:${PORT}`);
});
