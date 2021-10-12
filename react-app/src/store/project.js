// constants
const SET_PROJECT = 'project/SET_PROJECT';
const CREATE_PROJECT = 'project/CREATE_PROJECT';
const GET_PROJECTS_BY_CATEGORY = "projects/LOAD";

const setProject = (project) => ({
  type: SET_PROJECT,
  payload: project
});
const getProjectsAction = (project) => ({
  type: GET_PROJECTS_BY_CATEGORY,
  payload: project,
});


const createProject = (project) => ({
  type: CREATE_PROJECT,
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


export const addProject = (project) => async (dispatch) => {
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

    dispatch(createProject(data));
  }
}

export const getProject = () => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({

    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setProject(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}


const initialState = { project: null };

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return { project: action.payload }
    case CREATE_PROJECT:
      return { project: null }
    case GET_PROJECTS_BY_CATEGORY:
      return {project: action.payload}
    default:
      return state;
  }
}
