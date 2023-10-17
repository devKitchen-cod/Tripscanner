/** @format */

import { combineReducers } from "redux";
// import About from "../Common/about";
import {
  ALLCOUNTRIES,
  COUNTRYBYID,
  ALLCITIES,
  CITYBYID,
  ALLAIRPORTS,
  AIRPORTBYID,
  ADDCITY,
  AIRPORTS,
  AXIOSINSTANCE,
  AXIOSINSTANCE_SERVER_URL,
  AXIOSINSTANCE_TOKEN,
  CITY_AIRPORT,
  CITY_O_D,
  COUNTRY,
  FINDEDAIRPORTS,
  FLIGHTS,
  LOGIN,
  LOGOUT,
  SAVEFLIGHT,
  SEARCH,
  SETADMINKEY,
  SETEMAIL,
  SETNAME,
  SETPASSWORD,
  CLEAN_QUERY,
  START_SEARCH,
  FINISH_SEARCH,
  FINDEDCITIES,
  UPDATE_SELECTION_FROM,
  UPDATE_SELECTION_TO,
  FINISH_SEARCH_FROM,
  FINISH_SEARCH_TO,
  CREATECLASSFLIGHT,
  GETALLCLASSESFLIGHT,
} from "./redux-types";

const init_aInstance = {
  api_url: "",
  token: "",
  instance: "",
};
function AxiosInstance(state = init_aInstance, action) {
  switch (action.type) {
    case AXIOSINSTANCE_SERVER_URL: {
      return { ...state, api_url: action.payload };
    }
    case AXIOSINSTANCE_TOKEN: {
      return { ...state, token: action.payload };
    }
    case AXIOSINSTANCE: {
      return { ...state, instance: action.payload };
    }

    default:
      return state;
  }
}

const init_auth = {
  email: "",
  name: "",
  password: "",
  key: "",
};
function Auth(state = init_auth, action) {
  switch (action.type) {
    case SETEMAIL: {
      return { ...state, email: action.payload };
    }
    case SETNAME: {
      return { ...state, name: action.payload };
    }
    case SETPASSWORD: {
      return { ...state, password: action.payload };
    }
    case SETADMINKEY: {
      return { ...state, key: action.payload };
    }

    default:
      return state;
  }
}

const init_login = {
  isAuth: false,
};
function Login(state = init_login, action) {
  //login
  switch (action.type) {
    case LOGIN: {
      return { ...state, isAuth: action.payload };
    }
    case LOGOUT: {
      const user = action.playload;
      return [...state, user];
    }
    default:
      return state;
  }
}

const init_country = {
  all_countries: [],
  country_by_id: [],
};

function countryReducer(state = init_country, action) {
  switch (action.type) {
    case ALLCOUNTRIES: {
      return { ...state, all_countries: action.payload };
    }
    case COUNTRYBYID: {
      return { ...state, country_by_id: action.payload };
    }

    default:
      return state;
  }
}

const init_city = {
  all_cities: [],
  city_by_id: [],
  city_o_d: [],
  city_airport_dislocation: [],
  temp: [],
};

function cityReducer(state = init_city, action) {
  switch (action.type) {
    case ALLCITIES:
      return { ...state, all_cities: action.payload };
    case CITYBYID:
      return { ...state, city_by_id: action.payload };
    case CITY_O_D:
      return { ...state, city_o_d: action.payload };
    case ADDCITY:
      return { ...state, temp: action.payload };
    case CITY_AIRPORT:
      return { ...state, city_airport_dislocation: action.payload };

    default:
      return state;
  }
}

const init_airports = {
  all_airports: [],
  airport_by_id: [],
  finded_airports: [],
};
function airportReducer(state = init_airports, action) {
  switch (action.type) {
    case ALLAIRPORTS:
      return { ...state, all_airports: action.payload };
    case AIRPORTBYID:
      return { ...state, airport_by_id: action.payload };

    case AIRPORTS:
      return { ...state, res: action.payload };
    case FINDEDAIRPORTS:
      return { ...state, finded_airports: action.payload };
    default:
      return state;
  }
}

const init_getFlights = {
  saved_flight: {},
  res: [],
};
function flightReduser(state = init_getFlights, action) {
  switch (action.type) {
    case SAVEFLIGHT: {
      return { ...state, saved_flight: action.payload };
    }
    case FLIGHTS: {
      return { ...state, res: action.payload };
    }
    default:
      return state;
  }
}

const init_search = {
  loading: false,
  resultsFrom: [],
  resultsTo: [],
  valueFrom: "",
  valueTo: "",
};

function Search(state = init_search, action) {
  switch (action.type) {
    case CLEAN_QUERY:
      return state;
    case START_SEARCH:
      return { ...state, loading: true, value: action.payload };
    case FINISH_SEARCH_FROM:
      return { ...state, loading: false, resultsFrom: action.payload };
    case FINISH_SEARCH_TO:
      return { ...state, loading: false, resultsTo: action.payload };
    case UPDATE_SELECTION_FROM:
      return { ...state, valueFrom: action.selectionFrom };
    case UPDATE_SELECTION_TO:
      return { ...state, valueTo: action.selectionTo };
    default:
      return state;
  }
}

const init_flightClass = {
  flight_classes: [],
  res: [],
};

function ClassFlight(state = init_flightClass, action) {
  switch (action.type) {
    case CREATECLASSFLIGHT:
      return { ...state, flight_classes: action.payload };
    case GETALLCLASSESFLIGHT:
      return { ...state, res: action.payload };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  axios_instance: AxiosInstance,
  login: Login,
  auth: Auth,
  flights: flightReduser,
  airports: airportReducer,
  country: countryReducer,
  city: cityReducer,
  search: Search,
  classFlight: ClassFlight,
});
