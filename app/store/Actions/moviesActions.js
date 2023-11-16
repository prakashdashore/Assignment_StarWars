import axios from "axios";

const { addFilms } = require("../Reducers/movieReducer");

export const asyncFilms = ()=>async(dispatch ,getState)=>{

    try {
        const {data} = await axios(`https://swapi.dev/api/films`)


        dispatch(addFilms(data.results))
        
    } catch (error) {

        console.log(error)
        
    }

}