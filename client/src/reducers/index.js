import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registration from './registrationReducer';
import authReducer from './authReducer';
// import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  registration: registration,
  form: formReducer
});
