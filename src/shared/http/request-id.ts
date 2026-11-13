import { randomUUID } from 'node:crypto';
import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request { requestId?: string }
  }
}

export function requestId(req: Request, res: Response, next: NextFunction): void {
  const id = req.header('x-request-id') || randomUUID();
  req.requestId = id;
  res.setHeader('x-request-id', id);
  next();
}
