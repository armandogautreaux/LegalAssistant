// import { types } from '../actions/types';
import { CREATE_FILE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_FILE:
      return { ...state, [action.payload.username]: action.payload };
    default:
      return state;
  }
};
