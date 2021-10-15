import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams, NavLink } from "react-router-dom";
import { getProjectsSearchThunk } from '../../store/search';
import './SearchBar.css'



const SearchBar = (props) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.session.user);
    const projects = useSelector(state => state.search?.projects);
    console.log(projects, '<======PROJECTS use selector')
    const [searchRes, setSearchRes] = useState(projects)
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();
    console.log(searchTerm, '<----Search Term')

    useEffect(() => {
         dispatch(getProjectsSearchThunk());
        }, [dispatch])

    const getFilteredProjects = (search, projects) => {
        if (!search) {
            return []
        }
        const searchResult = projects?.filter(project => 
            project.title.toLowerCase().includes(search.toLowerCase()))
        console.log(searchResult, '<===== FILTERED projects')
        return searchResult
    }
    const result = getFilteredProjects(searchTerm, projects)
    console.log(result, '<----RESULT')

    return (
        <>
        <input
        type='text'
        placeholder={props.placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button type='submit' onClick={() => history.push(`/projects/${result?.id}`)}>submit</button> */}
        <ul>
            {result?.map((project) => <li onClick={() =>
                {setSearchTerm('')
                history.push(`/projects/${project?.id}`)}} key={project.id}>{project?.title}</li>)}
        </ul>
        </>
    )
}

export default SearchBar
