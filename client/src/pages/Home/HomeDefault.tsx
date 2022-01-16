import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "../../components/Home/AddProjectForm";
import { addToFavoritesAction, deleteProjectAction, getAllFavoritesAction, getAllProjectsAction } from "../../store/actions/projectActions";
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
          <section className="favorites">
            <header className="homeDefaultHeader">
              <h4>Workspace : 10</h4>
            </header>
            <div className="projects">
            {favorites.map((proj : any) => (
                <div 
                  key={proj.project_name} 
                  className="project" 
                  style={{backgroundColor : proj.color}}
                  onClick={() => navigate('/home/project/board') }
                >
                  <h3>{proj.project_name}</h3>
                </div>
              ))}
            </div>
          </section>
          <section className="workspace">
            <header className="homeDefaultHeader">
              <h4>Workspace : 10</h4>
              <i className="fa fa-plus" onClick={openAddProjectForm}></i>
            </header>
            <div className="projects">
              {allProjects.map((proj : any) => (
                <div 
                  key={proj.project_name} 
                  className="project" 
                  style={{backgroundColor : proj.color}}
                  onClick={() => navigate('/home/project/board') }
                >
                  <h3>{proj.project_name}</h3>
                  <div className="options">
                    <i className="fa fa-star-o" onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToFavoritesAction(proj.id));
                    }}/>
                    <i className="fa fa-trash" onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteProjectAction(proj.id));      
                    }}/>
                  </div>
                </div>
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
