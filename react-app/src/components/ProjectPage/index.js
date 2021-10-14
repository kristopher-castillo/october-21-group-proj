import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getProjectThunk, updateProjectThunk, deleteProjectThunk, getSpecificProjectThunk } from "../../store/project";
import {getProjectPledgesThunk} from "../../store/pledge"

const ProjectPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects?.projects);
  const pledges = useSelector((store) => store.pledges?.pledges?.pledges)
  const { id } = useParams();

  const pledging = pledges?.filter((pledge) => pledge.user_id === user.id)

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSpecificProjectThunk(id))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(getProjectPledgesThunk(id))
  }, [dispatch, id])

  const handleDelete = (projectId) => {
    dispatch(deleteProjectThunk(projectId))
  }
  console.log("Projects", projects)
  console.log("Pledging", pledging)
  function EditDeleteProject() {
    if (projects?.user_id === user.id) {
      return (
        <div>
          <button
            onClick={() => {
              history.push(`/projects/${id}/edit`)
            }}
            >
            Edit Project
          </button>
          <button
            onClick={() => {
              handleDelete(id)
              history.push("/")
            }}
          >
          Delete Project
          </button>
        </div>
      )
    }
    return null
  }

  function Pledge() {
    if (!pledging.length) {
      return (
      <button
        type="button"
        onClick={() => {
          history.push(`/projects/${id}/pledges`);
        }}
      >
        Back this Project!
    </button>
      )
    }
    return null
  }

  return (
    <>
      <div>{projects?.id}</div>
      <div>{projects?.title}</div>
      <div>{projects?.description}</div>
      <li key={projects?.id}>
        <img src={projects?.image_url} alt="" />
      </li>
      
      <div>
        <Pledge />
        <EditDeleteProject />
      </div>
    </>
  )

}

export default ProjectPage;
