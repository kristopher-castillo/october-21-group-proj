const GET_PROJECT = 'project/GET_PROJECT';
const CREATE_PROJECT = 'project/CREATE_PROJECT';
const UPDATE_PROJECT = 'project/UPDATE_PROJECT'
const GET_PROJECTS_BY_CATEGORY = "projects/LOAD";

const getProjectAction = (projects) => ({
  type: GET_PROJECT,
  payload: projects
});
const getProjectsAction = (projects) => ({
  type: GET_PROJECTS_BY_CATEGORY,
  payload: projects,
});


const createProjectAction = (projects) => ({
  type: CREATE_PROJECT,
  payload: projects
})


const updateProjectAction = projects => ({
  type: UPDATE_PROJECT,
  payload: projects
})


export const getCategoryProjectsThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/categories/${id}`);
  if (res.ok) {
      let projects = await res.json();
      dispatch(getProjectsAction(projects));
      return projects
  }
  return res;
};



export const addProjectThunk = (projects) => async (dispatch) => {
  const response = await fetch('/api/projects/', {
    method: 'POST',
    body: JSON.stringify(projects),
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


export const updateProjectThunk = (projects) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projects.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(projects)
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
      return { projects: action.payload }
    case CREATE_PROJECT:

      return {
        newState,
        projects: action.payload
      }

      return { project: null }
    case GET_PROJECTS_BY_CATEGORY:
      return {projects: action.payload}

    default:
      return state;
  }
}
