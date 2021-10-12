import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCategoriesThunk } from "../store/categories";
// import { signUp } from '../../store/session';

const ProjectForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const projects = useSelector(store => store.projects);
  const categories = useSelector(store => store.categories)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCategoriesThunk())
  }, [dispatch])

  //   const onSignUp = async (e) => {
  //     e.preventDefault();
  //     if (password === repeatPassword) {
  //       const data = await dispatch(signUp(username, email, password));
  //       if (data) {
  //         setErrors(data)
  //       }
  //     }
  //   };

  //   const updateUsername = (e) => {
  //     setUsername(e.target.value);
  //   };

  //   const updateEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const updatePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   const updateRepeatPassword = (e) => {
  //     setRepeatPassword(e.target.value);
  //   };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
        //   onChange={updateTitle}
          value={title}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
        //   onChange={updateDescription}
          value={description}
        ></input>
      </div>
      <div>
        <label>Goal</label>
        <input
          type="text"
          name="goal"
        //   onChange={updateGoal}
          value={goal}
        ></input>
      </div>
      <div>
        <label>Category</label>
        <select
          type="text"
          name="category"
        //   onChange={updateGoal}
          value={category}
        ></select>
      </div>
      <div>
        <label>Image Url</label>
        <input
          name="image_url"
        //   onChange={updateCategory}
          value={image}
        //   required={true}
        ></input>
      </div>
      <button type="submit">Submit Project</button>
    </form>
  );
};

export default ProjectForm;
