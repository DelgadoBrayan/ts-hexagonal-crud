import { Request, Response, NextFunction } from 'express';
import { UserNotFoundError, InvalidUserDataError } from '../../domain/errors/UserErrors';

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  console.error(`[ERROR] ${req.method} ${req.url}`, err);

  if (err instanceof UserNotFoundError) {
    return res.status(404).json({ error: err.message });
  }

  if (err instanceof InvalidUserDataError) {
    return res.status(400).json({ error: err.message });
  }

  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }

  return res.status(500).json({ error: 'Unexpected error' });
}
