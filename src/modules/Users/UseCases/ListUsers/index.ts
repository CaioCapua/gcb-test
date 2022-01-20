import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (): ListUserController => {
    const usersRepository = new UsersRepository()
    const listUsersUseCase = new ListUsersUseCase(usersRepository)
    const listUsersController = new ListUserController(listUsersUseCase)
    
    return listUsersController

}
