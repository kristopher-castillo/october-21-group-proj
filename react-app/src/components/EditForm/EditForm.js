import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getCategoriesThunk } from "../../store/categories";
import { updateProjectThunk, getSpecificProjectThunk } from "../../store/project";
import './EditForm.css';

const EditForm = () => {
  const project = useSelector(store => store.projects?.projects);
  const user = useSelector((state) => state.session.user);
  const categories = useSelector(store => store.categories?.categories)
  const [errors] = useState([]);
  const [title, setTitle] = useState(project?.title);
  const [description, setDescription] = useState(project?.description);
  const [goal, setGoal] = useState(project?.goal);
  const [categoryId, setCategoryId] = useState(project?.categories_id); //remove this null
  // const [categoryName, setCategoryName] = useState(categories[project?.categories_id - 1].name)
  const [image, setImage] = useState(project?.image_url)

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
      dispatch(getCategoriesThunk())
  }, [dispatch])

  // useEffect(() => {
  //     dispatch(getProjectThunk())
  // }, [dispatch])

  useEffect(() => {
      dispatch(getSpecificProjectThunk(id))
  }, [dispatch, id])

  if (!user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProject = {
        id,
        title,
        description,
        goal,
        image_url: image,
        user_id: user.id,
        categories_id: categoryId,
        current_amount: project.current_amount
      }

    dispatch(updateProjectThunk(updatedProject));
    history.push(`/projects/${project.id}`)
  }

  return (
    <form onSubmit={handleSubmit} className='editForm'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          // placeholder={project?.title}
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          required={true}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder={project?.description}
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required={true}
        ></input>
      </div>
      <div>
        <label>Goal</label>
        <input
          type="text"
          placeholder={project?.goal}
          name="goal"
          onChange={(e) => {
            setGoal(e.target.value);
          }}
          value={goal}
          required={true}
        ></input>
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
          defaultValue={project?.categories_id}
        >
          {/* The category shown on the edit page is not correct. */}
          {/* <option defaultValue={project?.categories_id}>{categories[project?.categories_id - 1].name}</option> */}
          {/* <option defaultValue={project?.categories_id}>{categories[project?.categories_id - 1].name}</option> */}

          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Image Url</label>
        <input
          name="image"
          placeholder={project?.image_url}
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          required={true}
        ></input>
      </div>
      <button type="submit" className='edit-btn'>Edit Project</button>
    </form>
  );
};

export default EditForm;
