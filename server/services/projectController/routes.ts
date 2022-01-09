import express from 'express'
import validateToken from '../../middleware/validateToken';
import { ProjectController } from './controller';

export class ProjectRoutes extends ProjectController{
  readonly path = "/projects";

  constructor(){
    super();
  }

  getRoutes(){
    const routes = express.Router();

    routes.use('', validateToken);

    routes.post('/', this.addProject);
    routes.get('/', this.getAllProject);
    routes.get('/exist', this.projectIsExist);

    return routes
  }

}