import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import router from './router/router';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors()); 
app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
