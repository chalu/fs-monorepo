import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  return res.json({
    message: 'Hello World'
  });
});

export default router;

