import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import React, {useEffect} from 'react';
import User from '../UsersPage/User'
import { getBackedProjectsThunk } from '../../store/users';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../ProjectCard/ProjectCard.css'
function UserBacked() {
    //WILL NEED TO CHANGE THE STATE TO THE USER'S PROFILE INSTEAD OF CURRENT USER
    const sessionUser = useSelector(state => state.session.user)
    const {userId} = useParams()
    const dispatch = useDispatch()
    const user_backed = useSelector(state => state.users.projects)

    useEffect(() => {
        dispatch(getBackedProjectsThunk(userId))
    }, [dispatch])


    return (
        <div>
            <User users={sessionUser}/>
            <ProjectCard />
        </div>
    )
}

export default UserBacked;
