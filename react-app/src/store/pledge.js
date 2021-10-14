const GET_SPECIFIC_PLEDGE = 'pledge/GET_SPECIFIC_PLEDGE'
const GET_PROJECT_PLEDGES = "pledge/GET_PROJECT_PLEDGES";
const CREATE_PLEDGE = 'pledge/CREATE_PLEDGE'
const UPDATE_PLEDGE = 'pledge/UPDATE_PLEDGE'
const DELETE_PLEDGE = 'pledge/DELETE_PLEDGE'

const getSpecificPledgeAction = pledges => ({
  type: GET_SPECIFIC_PLEDGE,
  payload: pledges
})

const getProjectPledgesAction = pledges => ({
  type: GET_PROJECT_PLEDGES,
  payload: pledges
})

const createPledgeAction = pledges => ({
  type: CREATE_PLEDGE,
  payload: pledges
})

const updatePledgeAction = pledges => ({
  type: UPDATE_PLEDGE,
  payload: pledges
})

const deletePledgeAction = pledges => ({
  type: DELETE_PLEDGE,
  payload: pledges
})

export const getProjectPledgesThunk = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}/pledges`)

  if(response.ok) {
    const pledges = await response.json();
    dispatch(getProjectPledgesAction(pledges));
    return pledges;
  }
}

export const getSpecificPledgeThunk = (pledgeId) => async (dispatch) => {
  const response = await fetch(`/api/pledges/${pledgeId}`)

  if (response.ok) {
    const pledge = await response.json();
    dispatch(getSpecificPledgeAction(pledge));
    return pledge
  }
  return response;
}

export const createPledgeActionThunk = (pledge, id) => async (dispatch) => {
    const response = await fetch(`/api/projects/${id}/pledges`, {
      method: "POST",
      body: JSON.stringify(pledge),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createPledgeAction(data));
      return data;
    }
}

export const updatePledgeThunk = (pledge) => async (dispatch) => {
  const response = await fetch(`/api/pledges/${pledge.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pledge)
  });

  if (response.ok) {
    const updatedPledge = await response.json();
    dispatch(updatePledgeAction(updatedPledge));
    return updatedPledge;
  }
}

export const deletePledgeThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/pledges/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    const pledge = await response.json();
    dispatch(deletePledgeAction(id));
    return pledge;
  }
}

const initialState = {}

export default function pledgeReducer(state = initialState, action) {
  const newState = {...state}
  switch(action.type) {
    case GET_SPECIFIC_PLEDGE:
      return {
        pledges: action.payload
      }
    case GET_PROJECT_PLEDGES:
      return {
        pledges: action.payload
      }
    case CREATE_PLEDGE:
      return {
        newState,
        pledges: action.payload
      }
    case UPDATE_PLEDGE:
      return {
        newState,
        pledges: action.payload
      }
    case DELETE_PLEDGE:
      return {
        newState,
        pledges: action.payload
      }
    default:
      return state;
  }
}
