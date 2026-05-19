import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'IPET 66 TecnoLingo',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    message: '🤖 Voltio dice: ¡El servidor del taller está funcionando!'
  });
});
