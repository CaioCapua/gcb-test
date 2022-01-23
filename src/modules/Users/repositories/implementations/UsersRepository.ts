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
    
    async update(id: string, name: string, tel: number, cel: number): Promise<User> {
        const user = await this.findById(id)

        if(!user) {
            throw new Error("User not exists");
        }

        const updateUser = Object.assign(user, {
            name,
            tel, 
            cel
        })

        await this.repository.save(updateUser)

        return updateUser
    }
    
    async findByIdIndex(id: string): Promise<number> {
        return null
    }
}

export {UsersRepository}