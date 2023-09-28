/** @format */

import { ALLCITIES, CITYBYID } from "./redux-types";

export const reqCreateCity = () => {};

export const reqGetAllCities = (axiosInstance) => {
    return async (dispatch) => {    
        const cities = await axiosInstance.get("/");
        console.log("[cities", cities)
        dispatch({type: ALLCITIES, payload: cities.data})
    }
};

export const reqGetCityById = (axiosInstance, id) => {
    return async (dispatch) => {
        const city = await axiosInstance.post("/", id);
        console.log("[city]", city.data)
        dispatch({type: CITYBYID, payload: city.data})
    }
};
