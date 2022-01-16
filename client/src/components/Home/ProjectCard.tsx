import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToFavoritesAction, deleteProjectAction, deleteToFavoritesAction } from '../../store/actions/projectActions';
import { ProjectCardType } from '../../types/types';

const ProjectCard = ({ proj, project_type} : ProjectCardType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div 
      key={proj.project_name} 
      className="project" 
      style={{backgroundColor : proj.color}}
      onClick={() => navigate('/home/project/board') }
    >
      <h3>{proj.project_name}</h3>
      <div className="options">
        <i 
          className={proj.infavorite === '0' ? "fa fa-star-o" : "fa fa-star"}
          onClick={(e) => {
            e.stopPropagation();
            if (proj.infavorite === '0') {
              dispatch(addToFavoritesAction(proj.id!));
            } else{ 
              dispatch(deleteToFavoritesAction(proj.id!))
            }
          }}
        />
        {project_type === 'projects' && (
          <i className="fa fa-trash" onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteProjectAction(proj.id!));      
          }}/>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
