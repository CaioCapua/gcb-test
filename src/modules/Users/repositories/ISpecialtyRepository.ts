import { Specialty } from "../entities/Specialty"


interface ISpecialtyRepository{
    create(name: string): Promise<Specialty>
    findByName(name: string): Promise<Specialty>
}

export {ISpecialtyRepository}