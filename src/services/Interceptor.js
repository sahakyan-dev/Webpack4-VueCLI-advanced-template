/* eslint-disable */
import axios from 'axios';

axios.interceptors.request.use(function(config) {
	const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
	if (!config.url.startsWith("http")) {
		config.headers['x-key'] = 'aa188c6ee03a821eaca1eb90e2a1977fed401254a84065f0bfe73a6a576b6840';
		if (tokenData && tokenData.access_token) {
			config.headers['x-access-token'] = tokenData.access_token;
		}
	}
	return config;
});

axios.interceptors.response.use((response) => {
	return response
}, function (error) {
	let originalRequest = error.config;
	if (error.response.status === 401 && !originalRequest._retry) {
		originalRequest._retry = true;
	}
	// if (error.response.status === 404 && !originalRequest._retry) {
	// 	originalRequest._retry = true
	// 	window.location.href = '/'
	// 	return
	// }
	// Do something with response error
	return Promise.reject(error)
});

export default {

}