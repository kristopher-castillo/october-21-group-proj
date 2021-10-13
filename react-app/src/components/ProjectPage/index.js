import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getProjectThunk } from "../../store/project";
// import { signUp } from '../../store/session';

const ProjectPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProjectThunk())
  }, [dispatch])

  return (
    <div></div>
  )

}

export default ProjectPage;