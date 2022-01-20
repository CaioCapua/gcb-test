import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {name, crm, tel, cel, cep, specialty} = request.body;

            const user = await this.createUserUseCase.execute({name, crm, tel, cel, cep, specialty})

            return response.status(201).json(user)
        } catch (error) {
            return response.status(400).json({error: error.message})
        }
    }
}

export {CreateUserController}