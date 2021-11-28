const GET_PROJECTS_SEARCH = "project/GET_PROJECTS_SEARCH";

const getProjectsSearchAction = (projects) => ({
  type: GET_PROJECTS_SEARCH,
  payload: projects
});

export const getProjectsSearchThunk = () => async (dispatch) => {
  const response = await fetch("/api/projects/");

  if (response.ok) {
    const data = await response.json();
    dispatch(getProjectsSearchAction(data));
  } else {
    return ["An error occurred. Please try again."];
  }
  return response;
};

const initialState = { project: null };

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS_SEARCH:
      return action.payload;
    default:
      return state;
  }
}