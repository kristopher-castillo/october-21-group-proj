import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProjectsThunk } from '../../store/users';
import React, { useEffect } from 'react';
import User from '../UsersPage/User'
import '../ProjectCard/ProjectCard.css'
import ProjectCard from '../ProjectCard/ProjectCard';

function UserProjects() {
    const sessionUser = useSelector(state => state.session.user)
    const { userId }  = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUserProjectsThunk(userId))
    }, [dispatch, userId])
    return (
        <div>
            <User users={sessionUser}/>
            <ProjectCard />
        </div>
    )
}

export default UserProjects;
