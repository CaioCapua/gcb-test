import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

let updateUserUseCase: UpdateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Update User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        updateUserUseCase = new UpdateUserUseCase(usersRepositoryInMemory)
    })

    it("Seja possivel editar um usuario", async () => {
        const user = await usersRepositoryInMemory.create({
            name: "User test",
            crm: 1234567,
            tel: 123456789,
            cel: 123456789,
            cep: 1122345,
            specialty: ["test1", "test2"]
        })

        const updateUser = await updateUserUseCase.execute({
            name: "User test alterado",
            tel: 999999999,
            cel: 999999999,
            id: user.id
        })

        expect(updateUser).toHaveProperty("name", "User test alterado")
    })

    it("Não seja possivel alterar um usuario inexistente", async () => {
        expect(async () => {
            await updateUserUseCase.execute({
                name: "User test alterado",
                tel: 999999999,
                cel: 999999999,
                id: "invalid-id"
            })
        }).rejects.toThrowError(Error)
    })
})