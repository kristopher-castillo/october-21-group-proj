import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getProjectThunk, updateProjectThunk, deleteProjectThunk } from "../../store/project";
// import { signUp } from '../../store/session';

const ProjectPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects);
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProjectThunk())
  }, [dispatch])

  const handleDelete = (projectId) => {
    dispatch(deleteProjectThunk(projectId))
    console.log("INSIDE THE HANDLEDELETE")
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

  return (
    <>
      <div>
        {deleteButton}
      </div>
      <div>
        {projects?.id}
        {projects?.title}
        </div>
    </>
  )

}

export default ProjectPage;