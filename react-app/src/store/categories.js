const GET_CATEGORIES = 'categories/LOAD'

const getCategoriesAction = (categories) => {
    return {
        type:GET_CATEGORIES,
        payload: categories
    }
}

export const getCategoriesThunk = () => async (dispatch) => {
    const res = await fetch('/categories')

    if (res.ok) {
        let categories = await res.json()
        dispatch(getCategoriesAction(categories))
    }
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