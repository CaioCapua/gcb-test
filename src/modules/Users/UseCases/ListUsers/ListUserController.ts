import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUserController {
    constructor(private listUsersUseCase: ListUsersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const allUsers = await this.listUsersUseCase.execute()

            return response.status(200).json({allUsers})
        } catch (error) {
            return response.status(500).json({error: error.message})
        }
    }
}

export {ListUserController}