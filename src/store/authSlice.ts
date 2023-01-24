import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Theme, UserWithTheme } from '../global/types';

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
    setUserTheme: (state, action: PayloadAction<{ theme: Theme }>) => {
      if (state.user) {
        state.user.theme = action.payload.theme;
      }
    },
  },
});

export const { login, logout, setUserTheme } = authSlice.actions;

export default authSlice;

export const selectAuth = (state: RootState) => state.auth;
