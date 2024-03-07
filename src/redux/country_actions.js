/** @format */

import { ALLCOUNTRIES, COUNTRYBYID } from "./redux-types";

export const reqCreateCountry = () => {};

export const reqGetAllCountries = (axiosInstance) => {
  return async (dispatch) => {
    try {
      const allCountries = await axiosInstance.get("/getAllCountries");
      dispatch({ type: ALLCOUNTRIES, payload: allCountries.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const reqGetCountryById = (axiosInstance, id) => {
  return async (dispatch) => {
    const countryById = await axiosInstance.post("//getCountryById", id);
    console.log("[countryById]", countryById.data);
    dispatch({ type: COUNTRYBYID, payload: countryById.data });
  };
};
