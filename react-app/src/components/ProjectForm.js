import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategoriesThunk } from "../store/categories";
import { addProjectThunk, getProjectThunk} from "../store/project";
import './ProjectForm.css'

const ProjectForm = ({closeModalHandler}) => {
  const [errors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [image, setImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(closeModalHandler)


  useEffect(() => {
      dispatch(getCategoriesThunk())
  }, [dispatch])

  useEffect(() => {
      dispatch(getProjectThunk())
  }, [dispatch])

  if (!user) {
    // return <Redirect to="/login" />;
    // return <LoginForm />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      const newProject = {
        title,
        description,
        goal,
        image_url: image,
        user_id: user.id,
        categories_id: categoryId,
        current_amount: 0
      }
      const lastProject = await dispatch(addProjectThunk(newProject));
      history.push(`/projects/${lastProject?.id}`)
      closeModalHandler()
    }

return (
  <div className='project-form-container'>
      <form onSubmit={handleSubmit} className='projectForm'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='form-row'>
          <label>Title</label>
          <input
          placeholder='Title'
            type="text"
            name="title"
            onChange={(e) => { setTitle(e.target.value)}}
            value={title}
          ></input>
        </div>
        <div className='form-row'>
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => { setDescription(e.target.value)}}
            value={description}
          ></input>
        </div>
        <div className='form-row'>
          <label>Goal</label>
          <input
            type="text"
            name="goal"
            onChange={(e) => { setGoal(e.target.value)}}
            value={goal}
          ></input>
        </div>
        <div className='form-row'>
          <label>Category</label>
          <select
            name="category"
            onChange={(e) => { setCategoryId(e.target.value)}}
          >{categories?.map((category) => (<option key={category.id} value={category.id}>{category.name}</option>))}
          </select>
        </div>
        <div className='form-row'>
          <label>Image Url</label>
          <input
            name="image"
            type="text"
            onChange={(e) => { setImage(e.target.value)}}
            value={image}
            required={true}
          ></input>
        </div>
        <button type="submit" className='submit-btn' >Create project</button>
      </form>
  </div>
  );
};

export default ProjectForm;
