import { SEARCH_FILE, FETCH_SEARCH, RESET_SEARCH } from '../actions/types';

const INITIAL_STATE = {
  response: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_FILE:
      return { ...state, response: null };
    case FETCH_SEARCH:
      return { ...state, response: action.payload };
    case RESET_SEARCH:
      return { ...state, response: null };
    default:
      return state;
  }
};
