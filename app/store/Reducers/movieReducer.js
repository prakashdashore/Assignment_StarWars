import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies : [],
  isLoading : [],
  films : [],
  peoples : [],
  planets : [],
  specias : [],
  starShips : [],
  vehicals : [],
  isErrors : []

}

export const moviesReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addMovies : (state , action)=>{
        state.movies  = action.payload
    },

    addFilms : (state , action)=>{
        state.films  = action.payload
    },

    addPeoples : (state , action)=>{
        state.peoples  = action.payload
    },

    addVehicles : (state , action)=>{
        state.vehicals  = action.payload
    },

    addSpecias : (state , action)=>{
        state.specias  = action.payload
    },



    
   
    
  },
})

export const { addMovies , addFilms  } = moviesReducer.actions

export default moviesReducer.reducer