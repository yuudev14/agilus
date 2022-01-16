import { Request, Response } from "express";
import { ProjectManager } from "./manager";

export class ProjectController{
  private manager : ProjectManager

  constructor(){
    this.manager = new ProjectManager()
  }

  readonly addProject = async(req : Request, res : Response) => {
    try {
      const { user } = res.locals;
      const data = req.body;
      data.user = user
      const createProject = await this.manager.createProject(data);
      return res.send(createProject)
    } catch (error) {
      console.log(error);
    }
  }

  readonly getAllProject = async(req : Request, res : Response) => {
    try {
      const { user } = res.locals;
      const projects = await this.manager.getAllProjects(user);
      return res.send(projects)
    } catch (error) {
      console.log(error);
    }
  }

  readonly getAllFavorites = async(req : Request, res : Response) => {
    try {
      const { user } = res.locals;
      const projects = await this.manager.getAllFavorites(user);
      
      return res.send(projects)
    } catch (error) {
      console.log(error);
    }
  }

  readonly projectIsExist = async (req : Request, res : Response) : Promise<Response> => {
    try {
      const { name } = req.query;
      const { user } = res.locals
      const isExist = await this.manager.findProject(name.toString(), user);
      if(isExist) return res.send(false);
      return res.send(true);
    } catch (error) {
      console.log(error);
    }
  }

  readonly addToFavorites = async (req : Request, res : Response) : Promise<Response> => {
    try {
      const { user } = res.locals;
      const { project_id } = req.body;
      const data = {
        user,
        project: project_id
      }
      const project = await this.manager.findProjectInFavorites(project_id, user, );
      if(!project){
        const addFavorite = await this.manager.addFavorites(data);
        return res.send(addFavorite);
      }
      return res.sendStatus(403);
      // if(isExist) return res.send(false);
    } catch (error) {
      console.log(error);
    }
  }
}