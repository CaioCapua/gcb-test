import { SpecialtyRepositoryInMemory } from "../../../repositories/in-memory/SpecialtyRepositoryInMemory"
import { CreateSpecialtyUseCase } from "./CreateSpecialtyUseCase"


let specialtiesRepositoryInMemory: SpecialtyRepositoryInMemory
let specialtyUserUseCase: CreateSpecialtyUseCase

describe("Create a Specialty", () => {
    beforeEach(() => {
        specialtiesRepositoryInMemory = new SpecialtyRepositoryInMemory()
        specialtyUserUseCase = new CreateSpecialtyUseCase(specialtiesRepositoryInMemory)
    })

    it("Seja possivel a criação de uma nova especialidade", async () => {
        const name  = "Specialty 1" 

        const specialty = await specialtyUserUseCase.execute(name)

        expect(specialty).toHaveProperty("id")
    })

    it("Nao seja possivel a criacao de uma nova especialidade que ja existe", async () => {
        expect(async () => {
            const name_test1  = "Specialty 1" 

            await specialtyUserUseCase.execute(name_test1)

            
            const name_test2  = "Specialty 1" 

            await specialtyUserUseCase.execute(name_test2)

        }).rejects.toThrowError(Error)
    })
})