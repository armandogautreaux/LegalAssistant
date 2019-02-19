import gyg from '../apis/gyg';
import { types } from './types';
// import { SIGN_IN } from './types';
import { SIGN_IN, SIGN_OUT, CREATE_FILE } from './types';

import history from '../history';

export const register = user => {
  return async function(dispatch) {
    const response = await gyg.post('/api/users/register', { user });
    dispatch({ type: types.USER_CREATE, payload: response.data });
    history.push('/login');
  };
};

// export const createStream = formValues => {
//   return async (dispatch, getState) => {
//     const { userId } = getState().auth;
//     const response = await streams.post('/streams', { ...formValues, userId });
//     dispatch({ type: CREATE_STREAM, payload: response.data });
//     //Do some programmatic navitation to get the user back to the root route
//     history.push('/');
//   };
// };

export const signIn = ({ email, password }) => {
  return async dispatch => {
    const response = await gyg.post('/api/users/login', { email, password });
    dispatch({ type: SIGN_IN, payload: response.data });
    // console.log(response.data);
    history.push('/');
  };
};

export const signOut = () => {
  return async dispatch => {
    // const { userName } = getState().auth;
    // await gyg.post('api/users/logout', { userName });
    await gyg.post('/api/users/logout');
    dispatch({ type: SIGN_OUT });
    history.push('/');
  };
};

export const createFile = formValues => {
  return async (dispatch, getState) => {
    const { username } = getState().auth;
    const response = await gyg.post('/files', { ...formValues, username });
    dispatch({ type: CREATE_FILE, payload: response.data });
    history.push('/');
  };
};
