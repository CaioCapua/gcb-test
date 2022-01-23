import { Specialty } from "../../entities/Specialty";
import { ISpecialtyRepository } from "../ISpecialtyRepository";

const specialties: Specialty[] = []

class SpecialtyRepositoryInMemory implements ISpecialtyRepository {
    async create(name: string): Promise<Specialty> {
        const specialty = new Specialty(name)
        
        specialties.push(specialty)
        
        return specialty
    }
    async findByName(name: string): Promise<Specialty> {
        const specialty = specialties.find(specialty => specialty.name === name)

        return specialty
    }
}

export {SpecialtyRepositoryInMemory}