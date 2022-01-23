import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory"
import { ListUsersUseCase } from "./ListUsersUseCase"

let listUsersUseCase: ListUsersUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory


describe("List all users", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        listUsersUseCase = new ListUsersUseCase(usersRepositoryInMemory)
    })

    it("Seja possivel listar todos usuarios cadastrados", async () => {
        const car = await usersRepositoryInMemory.create({
            name: "User test",
            crm: 1234567,
            tel: 123456789,
            cel: 123456789,
            cep: 1122345,
            specialty: ["test1", "test2"]
        })

        const allUsers = await listUsersUseCase.execute()

        expect(allUsers).toEqual([car])
    })
})