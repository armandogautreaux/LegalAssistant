// import { types } from '../actions/types';
import { SIGN_IN, SIGN_OUT, GET_USER } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true
        // userId: action.payload._id
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    case GET_USER:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    default:
      return state;
  }
};
