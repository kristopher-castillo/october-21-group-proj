const GET_USER_PROJECTS = 'user/projects_load'

const getUserProjectsAction = projects => ({
    type: GET_USER_PROJECTS,
    payload: projects
})


export const getUserProjectsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/projects`)
    if (res.ok) {
        console.log('inside the thunk')
        const projects = await res.json();
        dispatch(getUserProjectsAction(projects))
        return projects
    }
    return res
}

const initialState = {}

export default function userReducer(state = initialState, action){
    const newState = {...state}

    switch(action.type) {
        case GET_USER_PROJECTS:
            return {projects: action.payload}
        default:
            return state
    }
}
