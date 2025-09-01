import { configureStore } from "@reduxjs/toolkit";
import {
      persistReducer,
      persistStore,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Features/Auth/authSlice";
import { baseApi } from "./API/baseApi";

const persistConfig = { key: "auth", storage };
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
      reducer: {
            auth: persistedAuthReducer,
            [baseApi.reducerPath]: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
