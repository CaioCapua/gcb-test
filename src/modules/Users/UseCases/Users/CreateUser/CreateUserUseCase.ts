import { IUsersRepository } from "../../../repositories/IUsersRepository";
import buscaCep from 'busca-cep'
import { User } from "../../../entities/User";

interface IRequest {
    name: string;
    crm: number;
    tel: number;
    cel: number;
    cep: number;
    specialty: Array<string>;
}

class CreateUserUseCase {
    private usersRepository: IUsersRepository

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository
    }
    
    async execute({name, crm, tel, cel, cep, specialty}: IRequest): Promise<User> {

        if(typeof tel !== 'number' || typeof cel !== 'number' || typeof cep !== 'number') {
            throw new Error("Just numbers for 'tel', 'cep, 'cel");
        }

        const crmAlreadyExists = await this.usersRepository.findByCRM(crm);
        
        const busca = buscaCep(cep, {sync: true});

        if(crmAlreadyExists) { 
            throw new Error('User already exists!');
        }
        
        if(busca.erro) {
            throw new Error('User address not exists!');
        }

        if(specialty.length < 2) {
            throw new Error("Two specialties are required");
        }
        
        const user = await this.usersRepository.create({name, crm, tel, cel, cep, specialty})

        return user
    }
}

export { CreateUserUseCase }