import { SELECT_VALUE } from '../actions/types';

const INITIAL_STATE = {
  activeItem: 'home'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_VALUE:
      return { ...state, activeItem: action.payload };
    default:
      return state;
  }
};
