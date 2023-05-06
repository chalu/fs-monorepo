import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  return res.json({
    message: 'Hello World'
  });
});

router.get('/greet', (_req, res) => {
  return res.json({
    message: 'Hello You!'
  });
});

export default router;

