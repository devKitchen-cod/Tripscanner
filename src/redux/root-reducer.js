import { combineReducers } from "redux";
// import About from "../Common/about";
import {  AIRPORTS, CITY, FLIGHTS, LOGIN, LOGOUT, SETADMINKEY, SETEMAIL, SETNAME, SETPASSWORD } from "./redux-types";

const init_auth = {
	email: "",
	name: "",
	password: "",
	key: ""
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
			return {...state, key: action.payload}
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
const init_getFlights = {
	res: 0,
};
function get_Flights(state = init_getFlights, action) {
	switch (action.type) {
		case FLIGHTS: {
			return { ...state, res: action.payload };
		}
		default:
			return state;
	}
}
const init_airports = {
	res: []
}
function get_Airport(state = init_airports, action) {
	switch (action.type) {
		case AIRPORTS:
			return {...state, res: action.payload}
	
		default:
			return state;
	}
}

const init_city = {
	res: []
}
function get_City(state = init_city, action) {
	switch (action.type) {
		case CITY:
			return {...state, res: action.payload}
	
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
	login: Login,
	auth: Auth,
	flights: get_Flights, 
	airports: get_Airport,
	city: get_City,
	// rend: getRender
});
