import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { pageReducer } from '@/lib/slices/page';
import { authReducer } from '@/lib/slices/auth';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const reducer: Reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  page: pageReducer,
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
