import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

class ListUsersUseCase {
    constructor(private usersRepository: UsersRepository){}

    async execute(): Promise<User[]> {
        const allUsers = await this.usersRepository.list();

        if(!allUsers) {
            throw new Error("Users not found");
        }

        return allUsers
    }
}

export {ListUsersUseCase}