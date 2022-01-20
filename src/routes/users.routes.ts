import { Router } from 'express';
import createUserController from '../modules/Users/UseCases/CreateUser';
import listUsersController from '../modules/Users/UseCases/ListUsers';
import deleteUsersController from '../modules/Users/UseCases/DeleteUser';

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

export { usersRoutes }