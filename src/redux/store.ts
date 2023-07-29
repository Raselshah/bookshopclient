import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import stateHandlingSlice from "./feature/books/stateHandlingSlice";
// ...

export const store = configureStore({
  reducer: {
    stateHandling: stateHandlingSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
