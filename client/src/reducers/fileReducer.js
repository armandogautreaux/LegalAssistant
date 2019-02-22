import _ from 'lodash';
import {
  CREATE_FILE,
  FETCH_FILES,
  FETCH_FILE,
  EDIT_FILE,
  DELETE_FILE
  // DELETE_FILE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_FILE:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_FILES:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      };
    case FETCH_FILE:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case EDIT_FILE:
      return {
        ...state,
        [action.payload._id]: action.payload
      };

    case DELETE_FILE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
