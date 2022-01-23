import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

interface IRequest {
    id: string;
    name: string;
    tel: number;
    cel: number;
}

class UpdateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute({name, tel, cel, id}: IRequest): Promise<User> {
        const updateUser = await this.usersRepository.update(id, name, tel, cel)        

        return updateUser
    }
}

export {UpdateUserUseCase}