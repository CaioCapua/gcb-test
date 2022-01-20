// import { UsersRepository } from "../../repositories/implementations/UsersRepository";

// interface IRequest {
//     id: string;
//     name: string;
//     tel: number;
//     cel: number;
//     cep: number;
// }

// class UpdateUserUseCase {
//     constructor(private usersRepository: UsersRepository) {}

//     async execute({name, tel, cel, id}: IRequest): Promise<void> {
//         const user = await this.usersRepository.findById(id)

//         if(!user) {
//             throw new Error("User not exists");
//         }

//         await this.usersRepository.update(name, tel, cel)

//         return null
//     }
// }

// export {UpdateUserUseCase}