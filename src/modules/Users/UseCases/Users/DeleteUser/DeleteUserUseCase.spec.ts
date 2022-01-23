import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory"
import { DeleteUsersUseCase } from "./DeleteUserUseCase"

let deleteUserUseCase: DeleteUsersUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Delete user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        deleteUserUseCase = new DeleteUsersUseCase(usersRepositoryInMemory)
    })

    it("Seja possivel remover um usuario", async () => {
        const user = await usersRepositoryInMemory.create({
            name: "User test",
            crm: 1234567,
            tel: 123456789,
            cel: 123456789,
            cep: 1122345,
            specialty: ["test1", "test2"]
        })

        await deleteUserUseCase.execute(user.id)
        
        const listUser = await usersRepositoryInMemory.list() 

        expect(listUser).toEqual([])
    })

    it("Não seja possivel remover um usuario que não exista", async () => {
        expect(async () => {
            await deleteUserUseCase.execute('invalid-id')

        }).rejects.toThrowError("User not exists")
    })
})