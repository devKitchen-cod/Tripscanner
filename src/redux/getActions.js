/** @format */

import axios from "axios";
import {
  CITY,
  AIRPORTS,
  FINDEDAIRPORTS,
  FLIGHTS,
  COUNTRY,
} from "./redux-types";

export const reqGetFlights = () => {
  return async (dispatch) => {
    const flights = await axios.get("http://localhost:8080/api/getFlights");
    dispatch({ type: FLIGHTS, payload: flights.data });
  };
};

export const reqGetCity = () => {
  console.log("reqGetCity");
  return async (dispatch) => {
    // console.log('ded')
    const city = await axios.get("http://localhost:8080/api/getCity");
    let cityRes = city.data.map((item, key) => {
      return {
        key: key,
        text: item.name,
        value: item.name,
      };
    });
    console.log("cityRes", cityRes);
    dispatch({ type: CITY, payload: cityRes });
  };
};

export const reqGetAirports = () => {
  return async (dispatch) => {
    const airports = await axios.get("http://localhost:8080/api/getAirports");
    // console.log('countries ==', airports.data)
    // let data = airports.data;
    // let origin_airports = data.origin_airports;
    // let distination_airports = data.distination_airports;
    // origin_airports = origin_airports.map((item, key) => {
    //   return {
    //     key: key,
    //     text: item.name,
    //     value: item.name,
    //   };
    // });
    // distination_airports = distination_airports.map((item, key) => {
    //   return {
    //     key: key,
    //     text: item.name,
    //     value: item.name,
    //   };
    // });
    // let obj = {
    //   origin_airports,
    //   distination_airports,
    // };
    // console.log('obj')
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

export const reqGetCountrys = () => {
  return async (dispatch) => {
    const country = await axios.get(`http://localhost:8080/api/updateAirports`);
    // dispatch({type: COUNTRY, payload: country})

    console.log("country", country);
  };
};
