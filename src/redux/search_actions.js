/** @format */

import { CLEAN_QUERY, FINISH_SEARCH } from "./redux-types";

export const reqGetFindedCities = (axiosInstance, param) => {
  return async (dispatch) => {
    try {
      const findedCity = await axiosInstance.post("/search",{value: param});
      console.log("[findedCity]", findedCity.data);
      dispatch({ type: CLEAN_QUERY });
      dispatch({ type: FINISH_SEARCH, payload: findedCity.data });
      dispatch({ type: CLEAN_QUERY });
    } catch (error) {
      console.log("[error]", error);
    }
  };
};
