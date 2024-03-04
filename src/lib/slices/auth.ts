import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface UserState {
  isLoggedIn: boolean;
  user?: User;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  },
});

export const { setLoggedIn, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
