import { CreateUserRequestDTO } from '../../../application/dto/request/CreateUserRequestDTO';
import { User } from '../../models/User';

export interface IUserServicePort {
  listUsers(): Promise<User[]>;
  findUser(id: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<void>;
}
