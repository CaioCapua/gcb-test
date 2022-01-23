import { SpecialtyRepository } from "../../../repositories/implementations/SpecialtyRepository";
import { CreateSpecialtyController } from "./CreateSpecialtyController";
import { CreateSpecialtyUseCase } from "./CreateSpecialtyUseCase";

export default (): CreateSpecialtyController => {
    const specialtyRepository = new SpecialtyRepository()
    const createSpecialtyUseCase = new CreateSpecialtyUseCase(specialtyRepository)
    const createSpecialtyController = new CreateSpecialtyController(createSpecialtyUseCase)

    return createSpecialtyController
}
