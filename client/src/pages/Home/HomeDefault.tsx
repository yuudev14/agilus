import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "../../components/Home/AddProjectForm";
import ProjectCard from "../../components/Home/ProjectCard";
import { addToFavoritesAction, deleteProjectAction, deleteToFavoritesAction, getAllFavoritesAction, getAllProjectsAction } from "../../store/actions/projectActions";
import { emptyProjectListsAction } from "../../store/slicers/projectSlicers";
import "../../styles/home/homeDefault.scss";

const HomeDefault: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state : RootStateOrAny ) => state.projectReducer.favorites);
  const allProjects = useSelector((state : RootStateOrAny ) => state.projectReducer.allProjects);

  const openAddProjectForm = () => {
    document.querySelector('.add-project')?.classList.add('show');
  }

  useEffect(() => {
    dispatch(getAllProjectsAction());
    return () => {
      dispatch(emptyProjectListsAction())
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllFavoritesAction());
    return () => {
      dispatch(emptyProjectListsAction())
    }
  }, [dispatch]);

  return (
    <div className="homeDefault">
      <div className="content">
        <section className="workspace_favorites">
          <AddProjectForm />
          {favorites.length > 0 && (
            <section className="favorites">
              <header className="homeDefaultHeader">
                <h4>Favorites : {favorites.length}</h4>
              </header>
              <div className="projects">
              {favorites.map((proj : any) => (
                  <ProjectCard proj={proj} project_type='favorites'/>
                ))}
              </div>
            </section>
          )}
          <section className="workspace">
            <header className="homeDefaultHeader">
              <h4>Workspace : {allProjects.length}</h4>
              <i className="fa fa-plus" onClick={openAddProjectForm}></i>
            </header>
            <div className="projects">
              {allProjects.map((proj : any) => (
                <ProjectCard proj={proj} project_type='projects'/>
              ))}
            </div>
          </section>
        </section>
        <section className="taskDue">
          <Calendar />
          <div className="todays-tasks">
            <h2>Tasks for today</h2>
            <ul>
              <li>refactor code</li>
              <li>refactor code</li>
              <li>refactor code</li>
              <li>refactor code</li>
              <li>refactor code</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeDefault;
