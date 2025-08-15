import { User } from "../../domain/models/User";
import { UserResponseDTO } from "../dto/response/UserResponseDTO";

export class UserMapper {
  static toResponseDTO(user: User): UserResponseDTO {
    return {
      _id: user._id,
      name: user.name,
      email: user.email
    };
  }

  static toResponseDTOList(users: User[]): UserResponseDTO[] {
    return users.map(UserMapper.toResponseDTO);
  }
}
