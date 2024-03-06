import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { settingsStoreReducer } from '@/store/slices/settings';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer: Reducer = combineReducers({
  settings: settingsStoreReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
