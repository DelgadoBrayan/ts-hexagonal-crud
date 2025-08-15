import { IUserServicePort } from '../ports/service/IUserServicePort';
import { IPersistencePort } from '../ports/persistence/IUserPersistencePort';
import { User } from '../models/User';
import { InvalidUserDataError, UserNotFoundError } from '../errors/UserErrors';

export class UserUseCase implements IUserServicePort {
  constructor(private persistencePort: IPersistencePort) {}

  async listUsers(): Promise<User[]> {
    return this.persistencePort.getAllUsers();
  }

  async findUser(id: string): Promise<User | null> {
    const user = await this.persistencePort.getUserById(id);
    if (!user) throw new UserNotFoundError(`User with id ${id} not found`);
    return user;
  }

  async createUser(user: User): Promise<User> {
    if (!user.name || !user.email) {
      throw new InvalidUserDataError('Name and email are required');
    }
    return this.persistencePort.createUser(user);
  }
  async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    const updatedUser = await this.persistencePort.updateUser(id, data);
    if (!updatedUser) throw new UserNotFoundError(`User with id ${id} not found`);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    const deleted = await this.persistencePort.deleteUser(id);
    if (!deleted) throw new UserNotFoundError(`User with id ${id} not found`);
  }
}
