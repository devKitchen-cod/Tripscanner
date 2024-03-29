/** @format */

import { ALLCITIES, CITYBYID } from "./redux-types";

export const reqCreateCity = () => {};

export const reqGetAllCities = (axiosInstance) => {
  return async (dispatch) => {
    try {
      const cities = await axiosInstance.get("/getAllCities");
      console.log("[cities", cities);
      dispatch({ type: ALLCITIES, payload: cities.data });
    } catch (error) {
      console.log("[error]", error);
    }
  };
};

export const reqGetCityById = (axiosInstance, id) => {
  return async (dispatch) => {
    const city = await axiosInstance.post("/", id);
    console.log("[city]", city.data);
    dispatch({ type: CITYBYID, payload: city.data });
  };
};


