import { createSlice, PayloadAction, Reducer, Slice } from '@reduxjs/toolkit';

export interface SettingsStore {
  pageTitle?: string;
  sidebarOpened: boolean;
}

const initialState: SettingsStore = {
  pageTitle: undefined,
  sidebarOpened: false,
};

export const settingsSlice: Slice<SettingsStore> = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>): void => {
      state.pageTitle = action.payload;
    },
    setSidebarState: (state, action: PayloadAction<boolean>): void => {
      state.sidebarOpened = action.payload;
    },
  },
});

export const { setPageTitle, setSidebarState } = settingsSlice.actions;
export const settingsStoreReducer: Reducer<SettingsStore> = settingsSlice.reducer;
