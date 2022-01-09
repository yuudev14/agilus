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
}