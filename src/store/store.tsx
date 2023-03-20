import { configureStore } from '@reduxjs/toolkit'

import resultReducer from '../redux/ResultSlice'
import inputReducer from '../redux/InputSlice'


export const store = configureStore({
  reducer: {
    result: resultReducer,
    input: inputReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
