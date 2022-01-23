import { User } from "../entities/User";

interface IUserDTO {
    name: string;
    crm: number;
    tel: number;
    cel: number;
    cep: number;
    specialty: Array<string>;
}

interface IUsersRepository {
    findByCRM(crm: number): Promise<User>;
    findById(id: string): Promise<User>;
    findByIdIndex(id: string): Promise<number>;
    list(): Promise<User[]>
    create({name, crm, tel, cel, cep, specialty}: IUserDTO): Promise<User>
    delete(id: string): Promise<void>
    update(id: string, name: string, tel: number, cel: number): Promise<User>;
}

export { IUsersRepository, IUserDTO }