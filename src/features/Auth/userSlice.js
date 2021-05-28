import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
  // call API to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem('access-token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  // return user data
  return data.user;
});

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
  },

  reducers: {},
  extraReducer: {
    [register.fullfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = counterSlice;
export default reducer;
