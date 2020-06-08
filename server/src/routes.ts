import express, { response } from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.getAll)

routes.get('/points', pointsController.getAll)
routes.get('/points/:id', pointsController.getById)
routes.post('/points', pointsController.create)

export default routes;