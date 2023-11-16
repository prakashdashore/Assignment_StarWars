import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from './Reducers/movieReducer'

export const store = configureStore({
  reducer: {

    moviesReducer
   
  },
})