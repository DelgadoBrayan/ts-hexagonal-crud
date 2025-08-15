import { User } from '../../domain/models/User';
import { CreateUserRequestDTO } from '../dto/request/CreateUserRequestDTO';

export interface IUserService {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User | null>;
  createUser(data: CreateUserRequestDTO): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<void>;
}
