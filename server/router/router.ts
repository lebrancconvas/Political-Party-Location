import { Router } from 'express';
import type { Request, Response } from 'express';
import parties from '../data/party.json';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get('/data', (req: Request, res: Response) => {
  res.json(parties);
});

export default router;
