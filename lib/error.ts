import axios from "axios";
import { errorResponse } from "./types";

// post api call error handler
export const errorHandler = (error: errorResponse) => {
	if (axios.isAxiosError(error)) {
		// Axios-specific error
		return {
			status: 'error',
			message:
				error.response?.data?.detail ||
				'Unexpected error pls make sure your connected to the internet',
		};
	} else if (error instanceof Error) {
		return {
			status: 'error',
			message: `internal error: ${error.message}`,
		};
	} else {
		return {
			status: 'error',
			message: `internal error: ${error}`,
		};
	}
};

// get api call error handler
export const dataErrorHandler = (error: errorResponse) => {
	if (axios.isAxiosError(error)) {
		// Axios-specific error
		return {
            data: undefined,
			status: 'error',
			message:
				error.response?.data?.detail ||
				'Unexpected error pls make sure your connected to the internet',
		};
	} else if (error instanceof Error) {
		return {
			data: undefined,
			status: 'error',
			message: `internal error: ${error.message}`,
		};
	} else {
		return {
			data: undefined,
			status: 'error',
			message: `internal error: ${error}`,
		};
	}
};
