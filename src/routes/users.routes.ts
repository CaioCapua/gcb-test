import { Router } from 'express';
import createUserController from '../modules/Users/UseCases/Users/CreateUser';
import listUsersController from '../modules/Users/UseCases/Users/ListUsers';
import deleteUsersController from '../modules/Users/UseCases/Users/DeleteUser';
import updateUsersController from '../modules/Users/UseCases/Users/UpdateUser';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
    return createUserController().handle(request, response)
})

usersRoutes.get('/', (request, response) => {
    return listUsersController().handle(request, response)
})

usersRoutes.delete('/:id', (request, response) => {
    return deleteUsersController().handle(request, response)
})

usersRoutes.put('/:id', (request, response) => {
    return updateUsersController().handle(request, response)
})

export { usersRoutes }