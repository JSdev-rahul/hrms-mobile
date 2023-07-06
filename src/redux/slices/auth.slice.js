import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: null,
  status: null,
  isLoading: false,
  isError: false,
};
const authSigninSlice = createSlice({
  name: 'SigninAuth',
  initialState,
  reducers: {},
  extraReducers: bulilder => {},
});


export const authStatus = state => state.status;
export default authSigninSlice.reducer;

