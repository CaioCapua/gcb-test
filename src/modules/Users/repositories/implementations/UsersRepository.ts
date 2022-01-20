import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name, crm, tel, cel, cep, specialty }: IUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            crm,
            tel,
            cel, 
            cep, 
            specialty
        });

        await this.repository.save(user)

        return user
    }

    async findByCRM(crm: number): Promise<User> {
        const user = await this.repository.findOne({crm});
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({id});
        return user;
    }

    async list(): Promise<User[]> {
        return await this.repository.find()
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    // async update(name: string, tel: number, cel: number ): Promise<void> {
    //     // const userUpdate = await this.repository.save(user)

    //     return null
    // }
}

export {UsersRepository}