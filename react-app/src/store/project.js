const GET_PROJECT = 'project/GET_PROJECT';
const CREATE_PROJECT = 'project/CREATE_PROJECT';
const UPDATE_PROJECT = 'project/UPDATE_PROJECT'
const GET_PROJECTS_BY_CATEGORY = "projects/LOAD";

const getProjectAction = (project) => ({
  type: GET_PROJECT,
  payload: project
});
const getProjectsAction = (project) => ({
  type: GET_PROJECTS_BY_CATEGORY,
  payload: project,
});


const createProjectAction = (project) => ({
  type: CREATE_PROJECT,
  payload: project
})


const updateProjectAction = project => ({
  type: UPDATE_PROJECT,
  payload: project
})

export const getCategoryProjectsThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/categories/${id}/`);
  console.log('Before res.ok')
  if (res.ok) {
      console.log('Can I even get in here')
      let projects = await res.json();
      dispatch(getProjectsAction(projects));
  }
  return res;
};



export const addProjectThunk = (project) => async (dispatch) => {
  const response = await fetch('/api/projects/', {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(createProjectAction(data));
    return data;
  }
}

export const getProjectThunk = () => async (dispatch) => {
  const response = await fetch('/api/projects/');


  if (response.ok) {
    const data = await response.json();
    dispatch(getProjectAction(data))
  } 
  else {
    return ['An error occurred. Please try again.']
  }

  return response;
}


export const updateProjectThunk = (project) => async (dispatch) => {
  const response = await fetch(`/api/projects/${project.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  }); 

  if (response.ok) {
    const updatedProject = await response.json();
    dispatch(updateProjectAction(updatedProject));
    return updatedProject;
  }

}

const initialState = { project: null };


export default function projectReducer(state = initialState, action) {
  const newState = {...state}
  switch (action.type) {
    case GET_PROJECT:
      return { project: action.payload }
    case CREATE_PROJECT:

      return {
        newState,
        project: action.payload
      }

    case GET_PROJECTS_BY_CATEGORY:
      return {project: action.payload}

    default:
      return state;
  }
}
