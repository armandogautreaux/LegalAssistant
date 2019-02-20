import { USER_CREATE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE:
      return { registering: true };
    // case types.REGISTER_SUCCESS:
    //   return {};
    // case types.REGISTER_FAILURE:
    //   return {};
    default:
      return state;
  }
};
