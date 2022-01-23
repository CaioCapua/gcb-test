import { Router } from 'express'
import createSpecialtyController from '../modules/Users/UseCases/Specialty/CreateSpecialty/'

const specialtyRoutes = Router()

specialtyRoutes.post('/', (request, response) => {
    return createSpecialtyController().handle(request, response)
})

export {specialtyRoutes}