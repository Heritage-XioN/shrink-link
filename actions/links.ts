'use server';
import axios from 'axios';
import { axioInstance } from '../lib/axiosInstance';
import { getSession } from '@/lib/session';
import { revalidatePath } from 'next/cache';
import { shortenState, url, urlsState } from '@/lib/types';


export const fetchLinks = async (): Promise<urlsState> => {
	const session = await getSession();
	const config = {
		url: '/url',
		method: 'get',
		headers: {
			Authorization: `${session.tokenType} ${session.token}`,
			'content-type': 'application/json',
		},
	};
	const api = axioInstance(config);
	const res = await api;
	return {
		data: res.data,
	};
};


export const FetchAllLinks = async (): Promise<urlsState> => {
	const session = await getSession();
	const config = {
		url: `/url/all`,
		method: 'get',
		headers: {
			Authorization: `${session.tokenType} ${session.token}`,
			'content-type': 'application/json',
		},
	};
	const api = axioInstance(config);
	const res = await api;
	return {
		data: res.data,
	};
};


export const shortenurl = async (
	state: shortenState | undefined,
	formData: url
): Promise<shortenState> => {
	const session = await getSession();
	const config = {
		url: '/url',
		method: 'post',
		data: formData,
		headers: {
			Authorization: `${session.tokenType} ${session.token}`,
			'content-type': 'application/json',
		},
	};
	let res;
	try {
		const api = axioInstance(config);
		res = await api;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Axios-specific error
			console.error('Axios error:', error.response?.data || 'g');
			return {
				status: 'error',
				message:
					error.response?.data?.detail ||
					'Unexpected error pls make sure your connected to the internet',
			};
		} else if (error instanceof Error) {
			console.error('General error:', error.message);
			return {
				status: 'error',
				message: `internal error: ${error.message}`,
			};
		} else {
			console.error('Unexpected error:', error);
			return {
				status: 'error',
				message: `internal error: ${error}`,
			};
		}
	}
	revalidatePath("/dasboard")
	return res
		? {
				status: 'success',
				message: 'success',
		  }
		: {
				status: 'error',
				message: 'unexpected error',
		  };
};

