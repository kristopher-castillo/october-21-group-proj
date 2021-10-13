import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, Link, useParams } from "react-router-dom";
import { getCategoryProjectsThunk } from "../../store/project";

function SpecificCategory() {
    const dispatch = useDispatch();
    const {categoryId} = useParams()
    const projects = useSelector(state => state.projects.projects)
    useEffect(() => {
        dispatch(getCategoryProjectsThunk(categoryId))
    }, [dispatch, categoryId])
    return(
        <div className='main_category_container'>
            <div className='project_container'>
                <ul>
                    {projects?.projects?.map((project) => (
                        <li key={project.id}>
                            <img src={project.image_url} alt="" />
                            {project.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SpecificCategory
