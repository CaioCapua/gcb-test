// import { Request, Response } from "express";
// import { UpdateUserUseCase } from "./UpdateUserUseCase";

// class UpdateUserController {
//     constructor(private updateUserUseCase: UpdateUserUseCase) {}

//     async handle(request: Request, response: Response): Promise<Response> {
//         try {
//             const {name,tel, cel, cep} = request.body;
//             const {id} = request.params;

//             const user = await this.updateUserUseCase.execute({name, tel, cel, cep, id})

//             return response.status(200).json(user)
//         } catch (error) {
//             return response.status(400).json({error: error.message}) 
//         }  
//     }
// }