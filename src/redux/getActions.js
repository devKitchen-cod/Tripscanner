/** @format */

import axios from "axios";
import {
  CITY_O_D,
  AIRPORTS,
  FINDEDAIRPORTS,
  FLIGHTS,
  COUNTRY,
} from "./redux-types";

// export const getAllCountry
// export const getAllCity
// export const getAllAirport

export const reqGetCountry = (axiosInstance) => {
  return async (dispatch) => {
    const country = await axiosInstance.get("/getCountry");
    let res = country.data.map((item, key) => {
      return {
        key: item._id,
        text: item.name,
        value: item._id,
      };
    });
    dispatch({ type: COUNTRY, payload: res });
  };
};

//CITY
//Airport

// export const reqFindAirports = (obj) => {
//   console.log(obj);
//   return async (dispatch) => {
//     const airports = await axios.post(
//       "http://localhost:8080/api/getFindedAirports",
//       {
//         origin_city: obj.origin_city,
//         distination_city: obj.distination_city,
//       }
//     );
//     dispatch({ type: FINDEDAIRPORTS, payload: airports.data });
//   };
// };

export const reqGetFlights = (i) => {
  return async (dispatch) => {
    const flights = await i.get("/getFlights");
    console.log("flights", flights);
    dispatch({ type: FLIGHTS, payload: flights.data });
  };
};

export const reqGetCountrys = () => {
  return async (dispatch) => {
    const country = await axios.get(`http://localhost:8080/api/updateAirports`);
    // dispatch({type: COUNTRY, payload: country})

    console.log("country", country);
  };
};

export const serviceReqGet = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:8080/api/serviceFunction`);
    console.log(result);
  };
};
