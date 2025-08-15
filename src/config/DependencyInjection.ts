import { UserAdapter } from '../infrastructure/adapters/UserAdapter';
import { UserUseCase } from '../domain/usecases/UserUseCase';
import { UserServiceImpl } from '../application/serviceimpl/UserServiceImpl';
import { UserController } from '../infrastructure/controllers/UserController';

// Crear instancias
const userAdapter = new UserAdapter();
const userUseCase = new UserUseCase(userAdapter);
const userService = new UserServiceImpl(userUseCase);
const userController = new UserController(userService);

// Exportar
export { userController };
