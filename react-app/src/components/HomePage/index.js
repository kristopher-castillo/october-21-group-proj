import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { deleteProjectThunk, getSpecificProjectThunk, projectAmountThunk, getProjectThunk } from "../../store/project";
import './HomePage.css'

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects?.projects?.projects);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProjectThunk());
  }, [dispatch]);

  let featuredProject;
  let recommendedProjects;
  if (projects) {
    featuredProject = projects[Math.floor(Math.random() * projects?.length)]
    if (user) {
      recommendedProjects =
        projects.filter((project) => project.user_id !== user.id)
        .sort(() => 0.5 - Math.random()).slice(0, 3)
    }
    else {
      recommendedProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 2)
    }
  }

  return (
    <div className="home-container">
      <div className="projects-container">
        <div className="featured-projects">
          <p id="featured-projects-title">FEATURED PROJECT</p>
          <div className="featured-projects-image">
            <img
              id="featured-projects-image"
              alt={"featured proj"}
              src={featuredProject?.image_url}
            ></img>
          </div>
          <div className="featured-projects-info">
            <p id="selected-featured-title">{featuredProject?.title}</p>
            <p id="selected-featured-description">
              {featuredProject?.descrption}
            </p>
          </div>
        </div>

        <div className="recommended-projects">
          <p id="recommended-projects-title">MORE FOR YOU</p>
          {recommendedProjects?.map(project => (
            <li className='recommended-projects-item'>
              <div className="recommended-projects-image">
                <img
                  id="recommended-projects-image"
                  alt={"recommended proj"}
                  src={project.image_url}
                ></img>
              </div>
              <div className="recommended-projects-info">
                <p id="selected-recommended-title">{project.title}</p>
                <p id="selected-featured-description">
                  {project.description}
                </p>
              </div>              
            </li>
          ))}
        </div>
      </div>
    </div>
  );

}

export default HomePage;