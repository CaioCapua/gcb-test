import express from 'express';
import swaggerUi from 'swagger-ui-express'
import { usersRoutes } from './routes/users.routes';
import { specialtyRoutes } from './routes/specialty.routes';
import swaggerfile from './swagger.json'

import './database'

const app = express();

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerfile))
app.use('/users', usersRoutes)
app.use('/specialties', specialtyRoutes)

app.listen('3333',() => (console.log('Server started on port 3333')));
