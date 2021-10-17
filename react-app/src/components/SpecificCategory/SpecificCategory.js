import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams, Link } from "react-router-dom";
import { getCategoryProjectsThunk } from "../../store/project";
import HomePage from "../HomePage";
import './SpecificCategory.css'
import { left, right } from "../images";


function SpecificCategory() {
    const dispatch = useDispatch();
    const {categoryId} = useParams()
    const projects = useSelector(state => state.projects.projects)
    useEffect(() => {
        dispatch(getCategoryProjectsThunk(categoryId))
        document.getElementById('slider').scrollLeft = 0
    }, [dispatch, categoryId, document])


    function leftClick(e) {

        document.getElementById('slider').scrollLeft -= 200
    }
    function rightClick(e) {

        // window.alert('hi')
        document.getElementById('slider').scrollLeft += 200
    }

    return(
        <div>
            <HomePage />
            <div className='carousel-container'>
                <img id='slide-left'
                className='arrow'
                onClick={leftClick}
                src={left} alt="" />

                <div id='slider'>
                    {projects?.projects?.map((project) => (
                        <Link to={`/projects/${project?.id}`}>
                            <img className='thumbnail' src={project.image_url} alt="" />
                        </Link>
                    ))}
                </div>

                <img id='slide-right'
                onClick={rightClick}
                className='arrow'
                src={right} alt="" />

            </div>

        </div>

    )
}

export default SpecificCategory
