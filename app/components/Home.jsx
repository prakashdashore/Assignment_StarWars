"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFilms } from "../store/Actions/moviesActions";
import { sideBarData } from "../utils/data";
import Details from "./details";

const Lol = () => {
  const dispatch = useDispatch();

  const { films } = useSelector((state) => state.moviesReducer);

  console.log("Filllms", films);

  useEffect(() => {
    (async () => {
      await dispatch(asyncFilms());
    })();
  }, []);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-red-300 flex items-center justify-between">
      <div className="w-[30vw] min-h-[100vh] bg-white">


    


      



        

        {/* {sideBarData && sideBarData.map((items)=>{
          return(
            <><span key={items.id}>{items.label}</span>

            </>
          )
        })} */}


      </div>

      <div className="w-[70vw] min-h-[100vh] bg-gray-400">

    

      </div>
    </div>
  );
};

export default Lol;
