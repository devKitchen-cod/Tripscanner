/** @format */

import { CREATECLASSFLIGHT, GETALLCLASSESFLIGHT } from "./redux-types";

export const reqCreateClassFlight = (axiosInstance, obj) => {
  return async (dispatch) => {
    try {
      // console.log("[obj]", obj);
      const classes = await axiosInstance.post("/createClassFlight", {
        name: obj.name,
        price: obj.price,
        info: obj.info
      });
      dispatch({ type: CREATECLASSFLIGHT, payload: classes.data });
    } catch (error) {
      console.log("[error]", error);
    }
  };
};

export const reqGetAllClassesFlight = (axiosInstance) => {
  return async (dispatch) => {
    try {
      const classes = await axiosInstance.get("/getAllClasses");
      dispatch({ type: GETALLCLASSESFLIGHT, payload: classes.data });
    } catch (error) {
      console.log("[error]", error);
    }
  };
};

// export const reqGetClassFlightById = (axiosInstance, id) => {
//   return async (dispatch) => {
//     const city = await axiosInstance.post("/", id);
//     console.log("[city]", city.data);
//     dispatch({ type: CITYBYID, payload: city.data });
//   };
// };
