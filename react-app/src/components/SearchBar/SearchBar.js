import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { getProjectsSearchThunk } from '../../store/search';
import './SearchBar.css'

const SearchBar = (props) => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.search?.projects);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBarHidden, setSearchBarHidden] = useState(false)
    const history = useHistory();


    useEffect(() => {
         dispatch(getProjectsSearchThunk());
        }, [dispatch])

    const getFilteredProjects = (search, projects) => {
        if (!search) {
            return []
        }
        const searchResult = projects?.filter(project =>
            project.title.toLowerCase().includes(search.toLowerCase()))
        return searchResult
    }
    const result = getFilteredProjects(searchTerm, projects)

    return (
      <>
        <div
          className="search-bar-div"
          tabIndex="0"
          onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setSearchBarHidden(true);
            }
          }}
        >
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onClick={() => setSearchBarHidden(false)}
            value={searchTerm}
            className="search-bar-input"
          />
          <ul className="search-dropdown" hidden={searchBarHidden}>
            {result?.map((project) => (
              <Link
                to={`/projects/${project?.id}`}
                onClick={() => setSearchTerm("")}
                key={project.id}
                className={`results-${project.id}`}
              >
                {project?.title}
              </Link>
            ))}
          </ul>
        </div>
      </>
    );
}

export default SearchBar
