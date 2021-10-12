const GET_PROJECT = 'project/GET_PROJECT';
const CREATE_PROJECT = 'project/CREATE_PROJECT';

const getProjectAction = (project) => ({
  type: GET_PROJECT,
  payload: project
});

const createProjectAction = (project) => ({
  type: CREATE_PROJECT,
  payload: project
})

const initialState = { project: null };

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
    default:
      return state;
  }
}
