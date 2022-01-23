import { UsersRepository } from "../../../repositories/implementations/UsersRepository"
import { DeleteUsersController } from "./DeleteUserController"
import { DeleteUsersUseCase } from "./DeleteUserUseCase"

export default (): DeleteUsersController => {
    const usersRepository = new UsersRepository()
    const deleteUserUseCase = new DeleteUsersUseCase(usersRepository)
    const deleteUsersController = new DeleteUsersController(deleteUserUseCase)
    
    return deleteUsersController
} 