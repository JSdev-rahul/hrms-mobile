import {createAsyncThunk} from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '../constant/redux.constant';
  
export class AuthAsyncThunk {
  constructor() {
    this.authServices = new AuthService();
  }
  getServiceCategories = createAsyncThunk(
    ASYNC_ROUTES.SIGN_IN,
    async (payload, {rejectWithValue}) => {
      try {
        const response =
          await this.authServices.authService(
            payload,
          );

        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
  );
}

export const authThunk = new AuthAsyncThunk();
