import { UsersRepository } from "../../repositories/implementations/UsersRepository";

class DeleteUsersUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute(id: string): Promise<void> {
        const userExists = await this.usersRepository.findById(id)

        if(!userExists) {
            throw new Error("User not exists");
        }

        await this.usersRepository.delete(id)
    }
}

export {DeleteUsersUseCase}