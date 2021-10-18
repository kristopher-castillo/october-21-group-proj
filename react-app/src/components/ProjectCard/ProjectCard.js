import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUserProjectsThunk } from '../../store/users';
import React, { useEffect } from 'react';
// import User from '../UsersPage/User'

function ProjectCard() {
    const { userId }  = useParams();
    const dispatch = useDispatch()
    const user_projects = useSelector(state => state.users.projects)

    useEffect(() => {
        dispatch(getUserProjectsThunk(userId))

      }, [dispatch, userId])


    return (
      <div className="profile-content-wrap">
        <ul className="profile-content-container">
          {user_projects?.projects.map((project) => (
            <li className="project-item" key={project.id}>
              <Link to={`/projects/${project.id}`} key={project.id}>
                <div className="project-card">
                  <div>
                    <img
                      className="project-card-image"
                      src={project.image_url}
                      alt=""
                    />
                  </div>
                  <div className="project-card-info">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-des">{project.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

}

export default ProjectCard;

