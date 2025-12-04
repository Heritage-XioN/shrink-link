import axios from "axios"

// creates an axios instance base url
export const axioInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000',
});
