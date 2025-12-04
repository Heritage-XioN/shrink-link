import axios from "axios";
import { errorResponse } from "./types";


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
