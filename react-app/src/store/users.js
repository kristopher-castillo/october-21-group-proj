const GET_USER_PROJECTS = 'user/projects_load'
const GET_USER_PLEDGED_PROJECTS = 'user/pledge_project_load'
// const GET_SPECIFIC_USER = 'user/specific'

const getUserProjectsAction = projects => ({
    type: GET_USER_PROJECTS,
    payload: projects
})

const getBackedProjectsAction = projects => ({
    type: GET_USER_PLEDGED_PROJECTS,
    payload: projects
})

// const getSpecificUserAction = users => ({
//     type: GET_SPECIFIC_USER,
//     payload: users
// })


// export const getSpecificUserThunk = (id) => async (dispatch) => {
//     const res = await fetch(`/api/users/${id}`)
//     if (res.ok) {
//         const users = await res.json()
//         dispatch(getSpecificUserAction(users))
//         return users
//     }
// }

export const getBackedProjectsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/backed`)
    if(res.ok) {
        console.log('backedProjectThunk~~~~~~~~~')
        const projects = await res.json()
        dispatch(getBackedProjectsAction(projects))
        return projects
    }
}

export const getUserProjectsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/projects`)
    if (res.ok) {

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
        case GET_USER_PLEDGED_PROJECTS:
            return {projects: action.payload}
        // case GET_SPECIFIC_USER:
        //     return {users: action.payload}
        default:
            return state
    }
}
