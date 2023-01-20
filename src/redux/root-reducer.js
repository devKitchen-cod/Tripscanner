import { combineReducers } from "redux";
import { FLIGHTS, LOGIN, LOGOUT, SETADMINKEY, SETEMAIL, SETNAME, SETPASSWORD } from "./redux-types";

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

export const rootReducer = combineReducers({
	login: Login,
	auth: Auth,
	flights: get_Flights
});
