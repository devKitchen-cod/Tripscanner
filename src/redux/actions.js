// import axios from 'axios'

import axios from "axios";

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
			method: "POST",
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
// export const reqAuth = (obj) => {
// 	console.log("reqAuth obdj =", obj.name);
// 	return async (dispatch) => {

// 	//  axios({
// 	// 		method: "POST",
// 	// 		uri: "http://localhost:8080/api/auth-user-create",
// 	// 		data: {
// 	// 			name: obj.name,
// 	// 			email: obj.email,
// 	// 			password: obj.password,
// 	// 		},

// 	// 	}).then((res) => {
// 	// 		localStorage.setItem("token", res.data.token);
// 	// 		console.log("token", res.data.token)
// 	// 		dispatch(success_login());
// 	// 		dispatch(err_login());
// 	// 	})

// 		try {
// 			console.log('a');
// 			// dispatch(start_auth())
// 			const result = await axios({
// 				method: "POST",
// 				url: "http://localhost:8080/api/auth-user-create",
// 				data: {
// 					name: obj.name,
// 					email: obj.email,
// 					password: obj.password
// 				},
// 			});
// 			if (result.status === 200) {
// 				localStorage.setItem("token", result.data.token);
// 				console.log('res.data.token', result.data.token);
// 				dispatch(success_auth());
// 				dispatch(err_auth());
// 			} else {
// 				console.log('err');
// 			}
// 		} catch (err) {
// 			console.log('err', err);
// 		}
// 	};
// };

export const reqAuth = async (obj) => {
	console.log(obj);
	// const res = await axios.post("http://localhost:8080/api/auth-user-create", {
	// 	name: obj.name,
	// 	email: obj.email,
	// 	password: obj.password,
	// });
	// console.log(res)
	const result = await axios({
		method: "post",
		url: "http://localhost:8080/api/auth-user-create",
		data: {
	name: obj.name,
	email: obj.email,
	password: obj.password,
		},
	})
 
	if (result.status < 300) {
		console.log(result)
	}
};

export const reqCheckToken = (obj) => {
	console.log("reqCheckToken obj = ", obj);
};
