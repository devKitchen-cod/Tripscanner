/** @format */

import { FINDFLIGHT } from "./redux-types";

export const reqCreateFlight = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const reqGetAllFlight = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const reqFindFlight = (axiosInstance, params) => {
  return async (dispatch) => {
    try {
      console.log("[params]", params);
      const finded = await axiosInstance.post("/findFlights", params)
      console.log(finded)
    //   dispatch({type: FINDFLIGHT, payload: finded.data})
    } catch (error) {
      console.log(error);
    }
  };
};
