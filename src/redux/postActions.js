/** @format */

import axios from "axios";
import {} from "./redux-types";

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
