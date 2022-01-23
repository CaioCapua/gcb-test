import { Request, Response } from "express"
import { CreateSpecialtyUseCase } from "./CreateSpecialtyUseCase"


class CreateSpecialtyController {
    constructor(private createSpecialtyUseCase: CreateSpecialtyUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name } = request.body

            const specialty = await this.createSpecialtyUseCase.execute(name)
    
            return response.json(specialty)
        } catch (error) {
            
        }

    }
}

export {CreateSpecialtyController}