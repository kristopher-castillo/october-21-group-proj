import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import React, {useEffect} from 'react';
import User from '../UsersPage/User'
import { getBackedProjectsThunk } from '../../store/users';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../ProjectCard/ProjectCard.css'
function UserBacked() {
    const sessionUser = useSelector(state => state.session.user)
    const {userId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBackedProjectsThunk(userId))
    }, [dispatch, userId])


    return (
        <div>
            <User users={sessionUser}/>
            <ProjectCard />
        </div>
    )
}

export default UserBacked;
