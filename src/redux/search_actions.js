/** @format */

import {
  CLEAN_QUERY,
  FINISH_SEARCH_FROM,
  FINISH_SEARCH_TO,
} from "./redux-types";

export const reqGetFindedCitiesFrom = (axiosInstance, param) => {
  return async (dispatch) => {
    try {
      const findedCity = await axiosInstance.post("/search", { value: param });
      console.log("[findedCity]", findedCity.data);
      dispatch({ type: CLEAN_QUERY });
      dispatch({ type: FINISH_SEARCH_FROM, payload: findedCity.data });
      dispatch({ type: CLEAN_QUERY });
    } catch (error) {
      console.log("[error]", error);
    }
  };
};
export const reqGetFindedCitiesTo = (axiosInstance, param) => {
  return async (dispatch) => {
    try {
      const findedCity = await axiosInstance.post("/search", { value: param });
      console.log("[findedCity]", findedCity.data);
      dispatch({ type: CLEAN_QUERY });
      dispatch({ type: FINISH_SEARCH_TO, payload: findedCity.data });
      dispatch({ type: CLEAN_QUERY });
    } catch (error) {
      console.log("[error]", error);
    }
  };
};
