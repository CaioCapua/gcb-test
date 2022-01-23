import { User } from "../../entities/User";
import { IUserDTO, IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository{
    private users: User[] = [] 
    
    async findByCRM(crm: number): Promise<User> {
        const user = this.users.find(user => user.crm === crm)

        return user
    }
    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id);

        return user
    }
    async list(): Promise<User[]> {
        return this.users
    }
    
    async create({ name, crm, tel, cel, cep, specialty }: IUserDTO): Promise<User> {
        const user = new User({ name, crm, tel, cel, cep, specialty })
        
        this.users.push(user)
        
        return user
    }
    async delete(id: string): Promise<void> {
        const userIndex = await this.findByIdIndex(id)
        
        this.users.splice(userIndex, 1)
    }
    
    async findByIdIndex(id: string): Promise<number> {
        const userIndex = this.users.findIndex(user => user.id === id)

        return userIndex
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

        this.users.push(updateUser)

        return updateUser
    }
}

export {UsersRepositoryInMemory}