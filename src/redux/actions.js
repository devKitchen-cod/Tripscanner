// import axios from 'axios'

import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN, SETEMAIL, SETNAME, SETPASSWORD } from "./redux-types";
// const dispatch = useDispatch();

const start_login = () => {
	return { type: "start_req" };
};

const success_login = () => {
	return { type: "req_success" };
};

const err_login = () => {
	return { type: "err_req" };
};

const start_auth = () => {
	return { type: "start_req" };
};

const success_auth = () => {
	return { type: "req_success" };
};

const err_auth = () => {
	return { type: "err_req" };
};

export const reqLogin = (obj) => {
	// console.log('reqLogin obj =', obj)
	return (dispatch) => {
		dispatch(start_login());
		axios({
			method: "post",
			url: "http://localhost:8080/api/auth-user-login",
			data: {
				email: obj.email,
				password: obj.password,
			},
		}).then((res) => {
			localStorage.setItem("token", res.data.token);
			dispatch(success_login());
			dispatch(err_login());
		});
	};
};

export const reqAuth = (obj) => {
	
	return async dispatch => {
		console.log("as", obj);
	const res = await axios.post("http://localhost:8080/api/auth-user-create", {
		name: obj.name,
		email: obj.email,
		password: obj.password,
	});
	console.log(res);
	if (res.status === 200) {
		localStorage.setItem("token", res.data.token);
		dispatch({type: SETNAME, payload: obj.name})
		dispatch({type: SETEMAIL, payload: obj.email})
		dispatch({type: SETPASSWORD, payload: obj.password})
		dispatch({type: LOGIN, payload: true})
	}
	}
	// console.log("res ==", res);
};

export const reqCheckToken = (obj) => {
	console.log("reqCheckToken obj = ", obj);
};

// res.status<300? localStorage.setItem("token", res.data.token): console.log("error")
