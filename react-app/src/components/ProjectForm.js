import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getCategoriesThunk } from "../store/categories";
import { addProjectThunk, getProjectThunk, updateProjectThunk } from "../store/project";

const ProjectForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const projects = useSelector(store => store.projects);
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
      dispatch(getCategoriesThunk())
  }, [dispatch])

  useEffect(() => {
      dispatch(getProjectThunk())
  }, [dispatch])

  if (!user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      const newProject = {
        title,
        description,
        goal,
        category,
        image_url: image,
        user_id: user.id,
        categories_id: category.id
      }
      const lastProject = await dispatch(addProjectThunk(newProject));
      history.push("/")
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
      <button type="submit">Submit Project</button>
    </form>
  );
};

export default ProjectForm;
