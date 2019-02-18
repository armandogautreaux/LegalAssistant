import gyg from '../apis/gyg';
import { SIGN_IN, SIGN_OUT, CREATE_USER } from './types';
import history from '../history';

export const createUser = formValues => {
  return async dispatch => {
    const response = await gyg.post('api/users/register', { formValues });
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push('/users/signIn');
  };
};

export const signIn = formValues => {
  return async dispatch => {
    const response = await gyg.post('api/users/login', { formValues });
    dispatch({ type: SIGN_IN, payload: response.data });
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
