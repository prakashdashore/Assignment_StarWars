"use client";
import { store } from "../store/store";
import { Provider } from "react-redux";
import React from "react";
import Nev from "./Nev";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
       <Nev />
     
      {children}
    </Provider>
  );
};

export default Wrapper;
