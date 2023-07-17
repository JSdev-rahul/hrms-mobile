import {combineReducers} from '@reduxjs/toolkit';
import authSigninSlice from './auth.slice';

export default combineReducers({
  userSignin: authSigninSlice,
});
