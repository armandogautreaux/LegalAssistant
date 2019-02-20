import api from '../apis/gyg';
import { USER_CREATE, SIGN_IN, SIGN_OUT, CREATE_FILE } from './types';
import history from '../history';

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
    const response = await api.post('/api/files/', { ...formValues, userId });
    dispatch({ type: CREATE_FILE, payload: response.data });
    history.push('/dashboard');
  };
};
