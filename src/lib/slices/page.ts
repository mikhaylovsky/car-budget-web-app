import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setPageTitle } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
