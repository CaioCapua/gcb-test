import { IUsersRepository } from "../../../repositories/IUsersRepository";

class DeleteUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(id: string): Promise<void> {
        const userExists = await this.usersRepository.findById(id)

        if(!userExists) {
            throw new Error("User not exists");
        }

        await this.usersRepository.delete(id)
    }
}

export {DeleteUsersUseCase}