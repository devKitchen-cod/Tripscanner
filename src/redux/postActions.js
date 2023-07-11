/** @format */

import axios from "axios";
import { AIRPORTS, CITY_O_D, FINDEDAIRPORTS } from "./redux-types";

export const reqFindCity = (axiosInstance, obj) => {
  console.log("reqGetCity", obj);
  return async (dispatch) => {
    const city = await axiosInstance.post("/getCity", obj);
    console.log("cityRes", city.data);
    let cityRes = city.data;

    let res_origin = cityRes.origin_city?.map((item, key) => {
      return {
        key: key,
        text: item.name,
        value: item._id,
      };
    });

    let res_distination = cityRes.distination_city?.map((item, key) => {
      return {
        key: key,
        text: item.name,
        value: item._id,
      };
    });
    dispatch({ type: CITY_O_D, payload: { res_origin, res_distination } });
  };
};

export const reqFindAirports = (axiosInstance, obj) => {
  return async (dispatch) => {
    const airports = await axiosInstance.post("/getFindedAirports", obj);
    console.log("airports data", airports.data);


    let res_origin = airports.data.origin_airports.map((item, key) => {
      console.log(item.name)
      return {
        key: key,
        text: item.name,
        value: item._id,
      };
    });

    console.log('res_origin', res_origin)

    let res_distination = airports.data.distination_airports.map((item, key) => {
      return {
        key: key,
        text: item.name,
        value: item._id,
      };
    });
    dispatch({
      type: FINDEDAIRPORTS,
      payload: { res_origin, res_distination },
    });
  };
};
export const reqAddCityAirport = (obj) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8080/api/addNewField", {
      city: obj.city,
      airport: obj.airport,
    });
    console.log("res", res);
  };
};
export const reqAddFlights = (obj) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8080/api/addFlight", {
      obj: obj,
    });
    console.log("reqAddFlights = ", res);
  };
};

export const reqAddAirport = (obj) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8080/api/addAirport", {
      obj: obj,
    });
  };
};
// getAirportsByCity
