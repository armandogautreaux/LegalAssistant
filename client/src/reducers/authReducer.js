import { CREATE_USER, SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, [action.payload.id]: action.payload };
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        [action.payload.id]: action.payload
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
