import { IPersistencePort } from '../../domain/ports/persistence/IUserPersistencePort';
import UserModel, { UserDocument } from '../schemas/userSchema';
import { User } from '../../domain/models/User';

export class UserAdapter implements IPersistencePort {
  async getAllUsers(): Promise<User[]> {
    const users = await UserModel.find().lean<UserDocument[]>(); 
    return users.map((user) => ({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    }));
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id).lean<UserDocument | null>(); 
    if (!user) return null;
    return {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    };
  }

  async createUser(user: Omit<User, '_id'>): Promise<User> {
    const newUser = await UserModel.create(user);
    return {
      _id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
    };
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    const updatedUser = await UserModel.findByIdAndUpdate(id, data, { new: true })
      .lean<UserDocument | null>();
    if (!updatedUser) return null;
    return {
      _id: updatedUser._id.toString(),
      name: updatedUser.name,
      email: updatedUser.email,
    };
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await UserModel.findByIdAndDelete(id);
    return result !== null;
  }
}
