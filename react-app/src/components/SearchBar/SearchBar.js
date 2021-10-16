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
    const [searchText, setSearchText] = useState("")
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
        <div classname="search-bar-div">
            <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="search-bar-input"
            />
        {/* <button type='submit' onClick={() => history.push(`/projects/${result?.id}`)}>submit</button> */}
            <ul className="search-dropdown">
                {result?.map((project) => <li onClick={() =>
                    {setSearchTerm('')
                    history.push(`/projects/${project?.id}`)}} key={project.id} className={`results-${project.id}`}>{project?.title}</li>)}
            </ul>
        </div>
        </>
    )
}

export default SearchBar
