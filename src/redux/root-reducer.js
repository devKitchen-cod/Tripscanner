/** @format */

import { combineReducers } from "redux";
// import About from "../Common/about";
import {
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
  res: [],
};

function get_Country(state = init_country, action) {
  switch (action.type) {
    case COUNTRY: {
      return { ...state, res: action.payload };
    }

    default:
      return state;
  }
}

const init_city = {
  city_o_d: [],
  city_airport_dislocation: [],
  temp: [],
};

function get_City(state = init_city, action) {
  switch (action.type) {
    case CITY_O_D:
      return { ...state, city_o_d: action.payload };
    case ADDCITY:
      return { ...state, temp: action.payload };
    case CITY_AIRPORT: 
      return {...state, city_airport_dislocation: action.payload}
    default:
      return state;
  }
}

const init_getFlights = {
  saved_flight:{},
  res: [],
};
function get_Flights(state = init_getFlights, action) {
  switch (action.type) {
    case SAVEFLIGHT: {
      return{...state, saved_flight: action.payload}
    }
    case FLIGHTS: {
      return { ...state, res: action.payload };
    }
    default:
      return state;
  }
}
const init_airports = {
  res: [],
  finded_airports: [],
};
function get_Airport(state = init_airports, action) {
  switch (action.type) {
    case AIRPORTS:
      return { ...state, res: action.payload };
    case FINDEDAIRPORTS:
      return { ...state, finded_airports: action.payload };
    default:
      return state;
  }
}

const init_search ={
  result: []
}
function Search(state = init_search, action){
  switch (action.type) {
    case SEARCH:
      return {...state, result: action.payload}  
    default:
      return state;
  }
}
// const init = {

// }
// function getRender (state = init, action){
// 	switch(action.type){
// 		case ABOUT: { return(<About/>) }
// 	}
// }

export const rootReducer = combineReducers({
  axios_instance: AxiosInstance,
  login: Login,
  auth: Auth,
  flights: get_Flights,
  airports: get_Airport,
  country: get_Country,
  city: get_City,
  search: Search

  // rend: getRender
});
