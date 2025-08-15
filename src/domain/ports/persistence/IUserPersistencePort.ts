import { CreateUserRequestDTO } from '../../../application/dto/request/CreateUserRequestDTO';
import { User } from '../../models/User';

export interface IPersistencePort {
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User | null>;
  createUser(data: CreateUserRequestDTO): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
}
