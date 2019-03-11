import axios from 'axios';
/* eslint-disable */
export default{
	getMyProfileInfo() {
		return axios.get('me')
			.then(response => {
				console.log(response);
				return response.data
			})
			.catch(function (error) {
				return error.response.data;
			});
	},
	auth(social) {
		let authUser = {};
		let userInfo = {};
		let hasEmail = false;
		return axios.get('auth/login/'+social)
			.then(response => {
				if (response.status === 200) {
					console.log(response)
					authUser.access_token = response.data.data.accessToken;
					authUser.refresh_token = response.data.data.refreshToken;
					window.localStorage.setItem('authUser', JSON.stringify(authUser));
					console.log(authUser);
					return axios.get('me')
						.then(response => {
							console.log(response);
							if (response.status === 200) {
								userInfo = response.data.data;
								window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
								if (social.substring(0,8) == 'facebook') {
									hasEmail = userInfo['email'] == '' ? false : true;
									console.log(hasEmail);
									if (!hasEmail) {
										response.needEmail = 'needEmail'
										return response;
									}
								}
							}
							return response
						})
						.catch(function (error) {
							var logout = localStorage;
							logout.clear()
						})
				}
				return response
			})
			.catch(function (error) {
				return error;
			});
	},
	addCompany(payload) {
		return axios.post('recruiters/become', payload)
			.then(response => {
				console.log(response);
				return response.data
			})
			.catch(function (error) {
				return error.response.data;
			});
	},
	searchSmth(uri) {
		return axios.get(uri)
			.then(response => {
				return response.data
			})
			.catch(function (error) {
				return error.response.data;
			});
	},
	getSmth(uri) {
		return axios.get(uri)
			.then(response => {
				console.log(response);
				return response.data
			})
			.catch(function (error) {
				return error.response.data;
			});
	},
	checkCode(payload) {
		return axios.post('me/email/verify', payload)
			.then(response => {
				console.log(response);
				return response.data
			})
			.catch(function (error) {
				return error.response.data;
			});
	},
	updateMyProfileInfo(payload) {
		return axios.put('me', payload)
			.then(response => {
				console.log(response);
				return response.data
			})
			.catch(function (error) {
				return error.response.data;
			});
	},
}