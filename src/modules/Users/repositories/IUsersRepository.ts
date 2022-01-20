import { User } from "../entities/User";

interface IUserDTO {
    name: string;
    crm: number;
    tel: number;
    cel: number;
    cep: number;
    specialty: string;
}

interface IUsersRepository {
    findByCRM(crm: number): Promise<User>;
    findById(id: string): Promise<User>;
    list(): Promise<User[]>
    create({name, crm, tel, cel, cep, specialty}: IUserDTO): Promise<User>
    delete(id: string): Promise<void>
    // update(name: string, tel: number, cel: number): Promise<void>;
}

export { IUsersRepository, IUserDTO }