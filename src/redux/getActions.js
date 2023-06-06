/** @format */

import axios from "axios";
import {
  CITY,
  AIRPORTS,
  FINDEDAIRPORTS,
  FLIGHTS,
} from "./redux-types";

export const reqGetFlights = () => {
  return async (dispatch) => {
    const flights = await axios.get("http://localhost:8080/api/getFlights")
    dispatch({type: FLIGHTS, payload: flights.data})
  };
};

export const reqGetCity = () => {
  // console.log('ded')
  return async (dispatch) => {
    // console.log('ded')
    const city = await axios.get("http://localhost:8080/api/getCity");
    dispatch({ type: CITY, payload: city.data });
  };
};

export const reqGetAirports = () => {
  return async (dispatch) => {
    const airports = await axios.get("http://localhost:8080/api/getAirports");
    // console.log('countries ==', airports.data)
    dispatch({ type: AIRPORTS, payload: airports.data });
  };
};
export const reqFindAirports = (obj) => {
  console.log(obj);
  return async (dispatch) => {
    const airports = await axios.post(
      "http://localhost:8080/api/getFindedAirports",
      {
        origin_city: obj.origin_city,
        distination_city: obj.distination_city,
      }
    );
    dispatch({ type: FINDEDAIRPORTS, payload: airports.data });
  };
};
