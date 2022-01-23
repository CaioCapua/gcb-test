import { Request, Response } from "express";
import { DeleteUsersUseCase } from "./DeleteUserUseCase";

class DeleteUsersController {
    constructor(private deleteUsersUseCase: DeleteUsersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try { 
            const {id} = request.params;

            await this.deleteUsersUseCase.execute(id)
    
            return response.status(200).send()
            
        } catch (error) {
            return response.status(400).json({error: error.message})
        }
    }
}

export {DeleteUsersController}