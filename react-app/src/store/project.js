// constants
const SET_PROJECT = 'session/SET_PROJECT';
const CREATE_PROJECT = 'session/CREATE_PROJECT';

const setProject = (project) => ({
  type: SET_PROJECT,
  payload: project
});

const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project
})

const initialState = { project: null };

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

export const getProject = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
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

// export const logout = () => async (dispatch) => {
//   const response = await fetch('/api/auth/logout', {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });

//   if (response.ok) {
//     dispatch(removeUser());
//   }
// };


// export const signUp = (username, email, password) => async (dispatch) => {
//   const response = await fetch('/api/auth/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username,
//       email,
//       password,
//     }),
//   });
  
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setUser(data))
//     return null;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ['An error occurred. Please try again.']
//   }
// }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return { project: action.payload }
    case CREATE_PROJECT:
      return { project: null }
    default:
      return state;
  }
}
