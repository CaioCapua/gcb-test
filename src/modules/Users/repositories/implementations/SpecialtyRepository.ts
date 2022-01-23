import { getRepository, Repository } from "typeorm";
import { Specialty } from "../../entities/Specialty";
import { ISpecialtyRepository } from "../ISpecialtyRepository";


class SpecialtyRepository implements ISpecialtyRepository {

    private repository: Repository<Specialty>

    constructor() {
        this.repository = getRepository(Specialty)
    }    
    
    async create(name: string): Promise<Specialty> {
        const specialty = this.repository.create({name})
        
        await this.repository.save(specialty)

        return specialty
    }
    async findByName(name: string): Promise<Specialty> {
        const specialty = await this.repository.findOne(name)

        return specialty
    }

}

export {SpecialtyRepository}