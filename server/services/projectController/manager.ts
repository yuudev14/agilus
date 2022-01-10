import { getRepository, Repository } from "typeorm";
import { Favorites } from "../../entity/Favorites";
import { Projects } from "../../entity/Projects";

export class ProjectManager{
  private projectRepository: Repository<Projects>;
  private favoriteRepository: Repository<Favorites>;

  constructor(){
    this.projectRepository = getRepository(Projects);
    this.favoriteRepository = getRepository(Favorites);
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

  public getAllProjects = async(user_id) : Promise<Projects[]> => {
    return this.projectRepository.createQueryBuilder('projects')
      .where('user_id = :user_id', {user_id})
      .getMany()
  }

  public getAllFavorites = async(user_id) => {
    return this.projectRepository.createQueryBuilder('project')
      .innerJoin(Favorites, 'favorite', 'project.id = favorite.project_id')
      .where('favorite.user_id = :user_id', {user_id})
      .getMany()
  }

  public addFavorites = async(data) : Promise<Projects> => {
    return this.favoriteRepository.save(data)
  }
}