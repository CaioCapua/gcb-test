import { Specialty } from "../../../entities/Specialty";
import { ISpecialtyRepository } from "../../../repositories/ISpecialtyRepository";


class CreateSpecialtyUseCase {
    constructor(private specialtyRepository: ISpecialtyRepository) {}

    async execute(name: string): Promise<Specialty> {
        const verifySpecialty = await this.specialtyRepository.findByName(name)

        if(verifySpecialty) {
            throw new Error("Specialty already exists");
        }


        const specialty  = await this.specialtyRepository.create(name)

        return specialty
    }
}

export {CreateSpecialtyUseCase}