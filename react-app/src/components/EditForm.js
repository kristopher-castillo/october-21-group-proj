import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getCategoriesThunk } from "../store/categories";
import { getProjectThunk, updateProjectThunk, getSpecificProjectThunk } from "../store/project";

const EditForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const project = useSelector(store => store.projects?.projects);
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
      dispatch(getCategoriesThunk())
  }, [dispatch])

  useEffect(() => {
      dispatch(getProjectThunk())
  }, [dispatch])

  useEffect(() => {
      dispatch(getSpecificProjectThunk(id))
  }, [dispatch])

  if (!user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProject = {
        id,
        title,
        description,
        goal,
        category,
        image_url: image,
        user_id: user.id,
        categories_id: category.id,
        current_amount: project.current_amount
      }
      console.log(updatedProject)
    const updateProject = await dispatch(updateProjectThunk(updatedProject));
    history.push("/projects")
  }

  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) => { setTitle(e.target.value)}}
          value={title}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => { setDescription(e.target.value)}}
          value={description}
        ></input>
      </div>
      <div>
        <label>Goal</label>
        <input
          type="text"
          name="goal"
          onChange={(e) => { setGoal(e.target.value)}}
          value={goal}
        ></input>
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          onChange={(e) => { setCategory(e.target.value)}}
        >{categories?.map((category) => (<option key={category.id} value={category.id}>{category.name}</option>))}
        </select>
      </div>
      <div>
        <label>Image Url</label>
        <input
          name="image"
          type="text"
          onChange={(e) => { setImage(e.target.value)}}
          value={image}
          required={true}
        ></input>
      </div>
      <button type="submit">Edit Project</button>
    </form>
  );
};

export default EditForm;
