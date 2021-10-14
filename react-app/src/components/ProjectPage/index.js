import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getProjectThunk, updateProjectThunk, deleteProjectThunk, getSpecificProjectThunk } from "../../store/project";

const ProjectPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects.projects);
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  

  useEffect(() => {
    dispatch(getSpecificProjectThunk(id))
  }, [dispatch, id])

  const handleDelete = (projectId) => {
    dispatch(deleteProjectThunk(projectId))
  }


  const deleteButton = (
    <button
      type="button"
      onClick={() => {
        handleDelete(id)
        history.push("/")
      }}
    >
      Delete
    </button>
  )


  const pledgeButton = (
    <button
      type="button"
      onClick={() => {
        history.push(`/projects/${id}/pledges`);
      }}
    >
      Back this Project!
    </button>
  );

  const editButton = (
    <button type='button'
    onClick={() => {
      history.push(`/projects/${id}/edit`)
    }}
    >
      Edit
    </button>
  )


  return (
    <>
      <div>
        {deleteButton}
      </div>
      <div>
        {editButton}
      </div>
      <div>{projects?.id}</div>
      <div>{projects?.title}</div>
      <li key={projects?.id}>
        <img src={projects?.image_url} alt="" />
      </li>
      <div>
        {pledgeButton}
      </div>
    </>
  )

}

export default ProjectPage;
