import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { UserWithTheme } from '../global/types';

type StateType = {
  user: UserWithTheme | null;
};

const initialState: StateType = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<StateType>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;

export const selectAuth = (state: RootState) => state.auth;
