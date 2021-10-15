import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUserProjectsThunk, getSpecificUserThunk } from '../../store/users';
import React, { useState, useEffect } from 'react';
import User from '../UsersPage/User'

function ProjectCard() {
    const { userId }  = useParams();
    const dispatch = useDispatch()
    const user_projects = useSelector(state => state.users.projects)

    useEffect(() => {
        dispatch(getUserProjectsThunk(userId))

      }, [dispatch])


    return(
        <div className='profile-content-wrap'>
                <ul className='profile-content-container'>
                    <li>
                        {user_projects?.projects.map(project => (
                            <div className='project-card'>
                                <div>
                                    <img className='project-card-image' src={project.image_url} alt="" />
                                </div>
                                <div className='project-card-info'>
                                    <h3 className='project-card-title'>{project.title}</h3>
                                    <p className='project-card-des'>{project.description}</p>
                                </div>

                            </div>
                        ))}
                    </li>
                </ul>

            </div>
    )

}

export default ProjectCard;

