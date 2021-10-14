import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getProjectThunk } from '../../store/project';

const getFilteredProjects = (search, projects) => {
    if (!search) {
        return projects
    }
    return projects.map(project => project.title.includes(search))
}


const SearchBar = (props) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.session.user);
    const projects = useSelector(state => state.projects?.projects);
    console.log(projects, '<======PROJECTS')


    // const [searchRes, setSearchRes] = useState(projects)
    const [searchTerm, setSearchTerm] = useState('');

    // const projects = getProjectThunk;
    // console.log(getProjectThunk, '<=====Get Project Thunk')

    const filteredProjects = getFilteredProjects(searchTerm, projects)
    console.log(filteredProjects, '<----Filtered Projects')

    // const projects = useSelector(state => Object.values(state.projects?.projects?.projects));

    useEffect(() => {
         dispatch(getProjectThunk());
      }, [dispatch])


    return (
        <>
        <input
        type='search'
        placeholder={props.placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>submit</button></>
    )
}

export default SearchBar
