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
    const searchResult = projects?.find(project => project.title.toLowerCase().includes(search.toLowerCase()))
    console.log(searchResult, '<===== FILTERED')
    return searchResult
}


const SearchBar = (props) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.session.user);
    const projects = useSelector(state => state.projects?.projects?.projects);
    console.log(projects, '<======PROJECTS')
    const [searchRes, setSearchRes] = useState(projects)
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();
    console.log(searchTerm, '<----Search Term')

    useEffect(() => {
         dispatch(getProjectThunk());
      }, [dispatch])

    const result = getFilteredProjects(searchTerm, projects)
    console.log(result, '<----Filtered Projects')





    return (
        <>
        <input
        type='text'
        placeholder={props.placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' onClick={() => history.push(`/projects/${result?.id}`)}>submit</button></>
    )
}

export default SearchBar
