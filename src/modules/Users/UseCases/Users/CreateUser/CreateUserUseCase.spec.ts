import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Create User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("Seja possivel criar um usuario", async () => {
        const user = await createUserUseCase.execute({
            name: "User test",
            crm: 1234567,
            tel: 123456789,
            cel: 123456789,
            cep: 1122345,
            specialty: ["test1", "test2"]
        })

        expect(user).toHaveProperty("id")
    })

    it("Não seja possivel criar um usuario com mesmo crm", async () => {
        expect(async() => {
            const user = await createUserUseCase.execute({
                name: "User test",
                crm: 1234567,
                tel: 123456789,
                cel: 123456789,
                cep: 1122345,
                specialty: ["test1", "test2"]
            })
            const user2 = await createUserUseCase.execute({
                name: "User test",
                crm: 1234567,
                tel: 123456789,
                cel: 123456789,
                cep: 1122345,
                specialty: ["test1", "test2"]
            })
        }).rejects.toBeInstanceOf(Error)        
    })
})