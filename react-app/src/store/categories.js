const GET_CATEGORIES = "categories/LOAD";

const getCategoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories,
});

export const getCategoriesThunk = () => async (dispatch) => {
  const res = await fetch("/api/categories/");

  if (res.ok) {
    let categories = await res.json();
    dispatch(getCategoriesAction(categories));
  } 

  return res;
};

const initialState = {};
export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_CATEGORIES:
        return action.payload;

    default:
        return state;
    }
}
