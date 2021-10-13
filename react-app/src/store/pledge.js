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

export const getSpecificPledgeThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/projects/${id}/pledges`)
  
  if (response.ok) {
    let pledge = await response.json();
    dispatch(getSpecificPledgeAction(pledge));
    return pledge
  }
  return response;
}

export const createPledgeActionThunk = (pledge) => async (dispatch) => {
    const response = await fetch(`/api/projects/${pledge.id}/pledges`, {
      method: "POST",
      body: JSON.stringify(pledge),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }

      dispatch(createPledgeAction(data));
      return data;
    }
}

const initialState = {}

export default function pledgeReducer(state = initialState, action) {
  const newState = {...state}
  switch(action.type) {
    case CREATE_PLEDGE:
      return {
        newState,
        pledges: action.payload
      }
    default:
      return state;
  }
}