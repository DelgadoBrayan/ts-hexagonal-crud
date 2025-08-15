import { IUserService } from '../services/IUserService';
import { IUserServicePort } from '../../domain/ports/service/IUserServicePort';
import { User } from '../../domain/models/User';
import { UserResponseDTO } from '../dto/response/UserResponseDTO';
import { UserMapper } from '../mappers/UserMapper';
import { CreateUserRequestDTO } from '../dto/request/CreateUserRequestDTO';

export class UserServiceImpl implements IUserService {
  constructor(private userServicePort: IUserServicePort) {}

  async getUsers(): Promise<UserResponseDTO[]> {
    const users = await this.userServicePort.listUsers();
    return UserMapper.toResponseDTOList(users);
  }

  async getUser(id: string): Promise<UserResponseDTO | null> {
    const user = await this.userServicePort.findUser(id);
    return user ? UserMapper.toResponseDTO(user) : null;
  }

  async createUser(dto: CreateUserRequestDTO): Promise<User> {
    const user: User = {
      _id: dto._id,
      name: dto.name,
      email: dto.email
    };
    return this.userServicePort.createUser(user);
  }

  updateUser(id: string, data: Partial<User>): Promise<User | null> {
    return this.userServicePort.updateUser(id, data);
  }

  deleteUser(id: string): Promise<void> {
    return this.userServicePort.deleteUser(id);
  }
  
}
