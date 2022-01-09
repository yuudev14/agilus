import { getRepository, Repository } from "typeorm";
import { Projects } from "../../entity/Projects";

export class ProjectManager{
  private projectRepository: Repository<Projects>

  constructor(){
    this.projectRepository = getRepository(Projects)
  }

  public findProject = async(project_name: String, user_id) : Promise<Projects> => {
    console.log(user_id)
    return this.projectRepository.createQueryBuilder('projects')
      .where('project_name = :project_name', {project_name})
      .andWhere('user_id = :user_id', {user_id})
      .getOne()
  }

  public createProject = async(data) : Promise<Projects> => {
    return this.projectRepository.save(data)
  }
}