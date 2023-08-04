import { configureStore } from '@reduxjs/toolkit';
import { catcherApi } from 'services/catcher';
import requestTool from 'shared/tools/request';

const store = configureStore({
  reducer: {
    [catcherApi.reducerPath]: catcherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(catcherApi.middleware, requestTool.rtkQueryErrorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
