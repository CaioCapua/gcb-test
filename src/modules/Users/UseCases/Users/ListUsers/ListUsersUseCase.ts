import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class ListUsersUseCase {
    constructor(private usersRepository: IUsersRepository){}

    async execute(): Promise<User[] | void> {
        const allUsers = await this.usersRepository.list();

        if(!allUsers) {
            throw new Error("Users not found");
        }

        return allUsers
    }
}

export {ListUsersUseCase}