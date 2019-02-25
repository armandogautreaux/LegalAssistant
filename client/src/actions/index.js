import api from '../apis/gyg';
import {
  USER_CREATE,
  SIGN_IN,
  SIGN_OUT,
  CREATE_FILE,
  FETCH_FILES,
  FETCH_FILE,
  EDIT_FILE,
  DELETE_FILE,
  SEARCH_FILE,
  FETCH_SEARCH
} from './types';
import history from '../history';
// import qs from 'query-string';
//Register Action
export const register = user => {
  return async function(dispatch) {
    const response = await api.post('/users/register', { user });
    dispatch({ type: USER_CREATE, payload: response.data });
    history.push('/login');
  };
};

//SignIn Action
export const signIn = ({ email, password }) => {
  return async dispatch => {
    const response = await api.post('/users/login', { email, password });
    dispatch({ type: SIGN_IN, payload: response.data });
    history.push('/dashboard');
  };
};

//SignOut Action
export const signOut = () => {
  return async dispatch => {
    await api.get('/users/logout');
    dispatch({ type: SIGN_OUT });
    history.push('/');
  };
};

//CreateFile Action
export const createFile = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post('/files/', { ...formValues, userId });
    dispatch({ type: CREATE_FILE, payload: response.data });
    history.push('/dashboard');
  };
};

//Fetch files
export const fetchFiles = () => {
  return async dispatch => {
    const response = await api.get('/files/');
    dispatch({ type: FETCH_FILES, payload: response.data });
  };
};

export const fetchFile = id => {
  return async dispatch => {
    const response = await api.get(`/files/${id}`);
    dispatch({ type: FETCH_FILE, payload: response.data });
  };
};

export const editFile = (id, formValues) => {
  return async dispatch => {
    const response = await api.patch(`/files/${id}`, formValues);
    dispatch({ type: EDIT_FILE, payload: response.data });
    history.push('/dashboard');
  };
};

export const deleteFile = id => {
  return async dispatch => {
    await api.delete(`/files/${id}`);
    dispatch({ type: DELETE_FILE, payload: id });
    history.push('/dashboard');
  };
};

// //fetchSearch
// export const fetchSearch = Query => {
//   return async dispatch => {

//     // const response = await api.get(`/files/?${searchString}`);
//     // dispatch({ type: SEARCH_FILE, payload: response.data });
//     // console.log(response.data);
//     history.push(`/results/${searchString}`);
//   };
// };

//searchFile
export const fetchSearch = Query => {
  return async dispatch => {
    // const searchString = qs.stringify(formValues);
    const response = await api.get(`/files/${Query}`);
    dispatch({ type: FETCH_SEARCH, payload: response.data });
    // console.log(response.data);
    history.push(`/search/${Query}`);
  };
};

// export const searchFile = formValues => {
//   return dispatch => {
//     const searchString = qs.stringify(formValues);
//     const nueObject = { search: searchString };
//     dispatch({
//       type: SEARCH_FILE,
//       payload: nueObject
//     });

//     history.push(`/results/?${searchString}`);
//   };
// };

export const searchFile = () => {
  return {
    type: SEARCH_FILE
  };
};
