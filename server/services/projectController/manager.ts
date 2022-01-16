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

  public findProject = async(project_name: String, user_id, id? : String) : Promise<Projects> => {
    return this.projectRepository.createQueryBuilder('projects')
      .where('(project_name = :project_name OR id = :id) AND user_id = :user_id', {project_name, id, user_id})
      .getOne()
  }

  public findProjectInFavorites = async(project_id: String, user_id) : Promise<Favorites> => {
    return this.favoriteRepository.createQueryBuilder('favorite')
      .where('project_id = :project_id', {project_id})
      .andWhere('user_id = :user_id', {user_id})
      .getOne()
  }

  public createProject = async(data) : Promise<Projects> => {
    return this.projectRepository.save(data)
  }

  public deleteProject = async(project_id) => {
    return this.projectRepository.delete({id : project_id})
  }

  public deleteProjectInFavorites = async(project_id) => {
    return this.favoriteRepository.createQueryBuilder('favorites')
      .delete()
      .where('project_id = :project_id', {project_id})
      .execute()
  }

  public getAllProjects = async(user_id)  => {
    return this.projectRepository.createQueryBuilder('projects')
      .select(['COALESCE((SELECT COUNT(*) from favorites where project_id = projects.id GROUP BY id), 0) AS inFavorite', 'projects.*'])
      .where('user_id = :user_id', {user_id})
      .getRawMany()
  }

  public getAllFavorites = async(user_id) => {
    return this.projectRepository.createQueryBuilder('project')
      .innerJoin(Favorites, 'favorite', 'project.id = favorite.project_id')
      .where('favorite.user_id = :user_id', {user_id})
      .getMany()
  }

  public addFavorites = async(data) : Promise<Projects> => {
    const project = await this.favoriteRepository.save(data)
    return this.projectRepository.createQueryBuilder('project')
        .where("project.id = :project_id", {project_id: project.project})
        .getOne()
  }
}