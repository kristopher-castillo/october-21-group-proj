import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, Link, useParams } from "react-router-dom";
import { getCategoryProjectsThunk } from "../../store/project";
import HomePage from "../HomePage";
import ProjectCard from "../ProjectCard/ProjectCard";
function SpecificCategory() {
    const dispatch = useDispatch();
    const {categoryId} = useParams()
    const projects = useSelector(state => state.projects.projects)
    useEffect(() => {
        dispatch(getCategoryProjectsThunk(categoryId))
    }, [dispatch, categoryId])

    console.log(projects)
    let featured = projects?.projects[Math.floor(Math.random() * projects?.projects.length)]


    return(

        <div>
            <HomePage projects={projects}/>
            <ProjectCard />

        </div>

    )
}

export default SpecificCategory
