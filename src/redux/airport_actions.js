/** @format */

import { AIRPORTBYID, ALLAIRPORTS } from "./redux-types";

export const reqCreateAirport = (axiosInstance, obj) => {};

export const reqGetAllAirport = (axiosInstance) => {
  return async (dispatch) => {
    const airports = await axiosInstance.get("/");
    // const airports = '2'
    console.log("[airports]", airports);
    dispatch({ type: ALLAIRPORTS, payload: airports });
  };
};

export const reqGetAirportByID = (axiosInstance, id) => {
  return async (dispatch) => {
    const airport = await axiosInstance.post("/", id);
    console.log("[airport]", airport.data);
    dispatch({ type: AIRPORTBYID, payload: airport.data });
  };
};
