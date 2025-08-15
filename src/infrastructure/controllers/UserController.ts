import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../../application/services/IUserService';

export class UserController {
  constructor(private userService: IUserService) {}

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.getUser(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await this.userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedUser = await this.userService.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
