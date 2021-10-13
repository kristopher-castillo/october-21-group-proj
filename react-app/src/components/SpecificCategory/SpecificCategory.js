import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, Link, useParams } from "react-router-dom";
import { getCategoryProjectsThunk } from "../../store/project";

function SpecificCategory() {
    const dispatch = useDispatch();
    const {categoryId} = useParams()
    const projects = useSelector(state => state.projects.projects)
    console.log('This is my projects', projects)
    useEffect(() => {
        dispatch(getCategoryProjectsThunk(categoryId))
    }, [dispatch, categoryId])
    return(
        <div className='main_category_container'>
            <div className='project_container'>
                <ul>
                    {projects?.map((project) => (
                        <li key={project.id}>{project.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SpecificCategory
