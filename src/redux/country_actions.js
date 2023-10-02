/** @format */

import { ALLCOUNTRIES, COUNTRYBYID } from "./redux-types";

export const reqCreateCountry = () => {};

export const reqGetAllCountries = (axiosInstance) => {
  return async (dispatch) => {
    console.log('i')
    const allCountries = await axiosInstance.get("/getAllCountries");
    // console.log("[allCountries]", allCountries.data);
    dispatch({ type: ALLCOUNTRIES, payload: allCountries.data });
  };
};

export const reqGetCountryById = (axiosInstance, id) => {
  return async (dispatch) => {
    const countryById = await axiosInstance.post("/", id);
    console.log("[countryById]", countryById.data);
    dispatch({ type: COUNTRYBYID, payload: countryById.data });
  };
};
