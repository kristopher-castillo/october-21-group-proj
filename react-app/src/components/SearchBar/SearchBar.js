import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getProjectThunk } from '../../store/project';

const getFilteredProjects = (search, projects) => {
    console.log(projects, '<------Projects 1')

    if (!search) {
        console.log(projects, '<------Projects 2')
        return projects
    }
    console.log('HELLO 2')
    const filtered = projects?.projects?.filter(project => project.title)
    console.log(filtered, '<===== FILTERED')
}


const SearchBar = (props) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.session.user);
    const projects = useSelector(state => state.projects?.projects?.projects);
    console.log(projects, '<======PROJECTS')
    const [searchRes, setSearchRes] = useState(projects)
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm, '<----Search Term')


    const filteredProjects = getFilteredProjects(searchTerm, projects)
    console.log(filteredProjects, '<----Filtered Projects')


    useEffect(() => {
         dispatch(getProjectThunk());
      }, [dispatch])


    return (
        <>
        <input
        type='text'
        placeholder={props.placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>submit</button></>
    )
}

export default SearchBar
