const GET_CATEGORIES = 'categories/LOAD'
const GET_PROJECTS_BY_CATEGORY = 'projects/LOAD'

const getCategoriesAction = (categories) => ({
    type:GET_CATEGORIES,
    payload: categories
})

const getProjectsAction = (projects) => ({
    type: GET_PROJECTS_BY_CATEGORY,
    payload: projects
})

export const getProjectsThunk = (id) => async (dispatch) => {
    const res = await fetch('/api/categories/<int:id>')

    if (res.ok) {
        let projects = await res.json()
        dispatch(getProjectsAction(projects))
    }
    return res
}

export const getCategoriesThunk = () => async (dispatch) => {
    const res = await fetch('/api/categories/');

    if (res.ok) {
        let categories = await res.json()
        dispatch(getCategoriesAction(categories))
    }
    else{
        console.log("didn't make it here")
    }

    return res;
}



const initialState = {}
export default function categoriesReducer(state = initialState, action){
    const newState = {...state}
    switch (action.type) {
        case GET_CATEGORIES:
            return  action.payload
        default:
            return state
    }

}
