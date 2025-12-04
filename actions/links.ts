'use server';
import { axioInstance } from '../lib/axiosInstance';
import { getSession } from '@/lib/session';
import { revalidatePath } from 'next/cache';
import { shortenState, url, urlsState } from '@/lib/types';
import { dataErrorHandler, errorHandler } from '@/lib/error';

// handles api call for getting the last 3 shortened urls
export const fetchLinks = async (): Promise<urlsState> => {
	// handles getting the session object
	const session = await getSession();
	// request config
	const config = {
		url: '/url',
		method: 'get',
		headers: {
			Authorization: `${session.tokenType} ${session.token}`,
			'content-type': 'application/json',
		},
	};
	let res;
	try {
		// api call
		const api = axioInstance(config);
		res = await api;
	} catch (error) {
		return dataErrorHandler(error);
	}
	return {
		data: res.data,
	};
};

//handles handles api call for getting all the shortened urls
export const FetchAllLinks = async (): Promise<urlsState> => {
	// handles getting the session object
	const session = await getSession();
	// request config
	const config = {
		url: `/url/all`,
		method: 'get',
		headers: {
			Authorization: `${session.tokenType} ${session.token}`,
			'content-type': 'application/json',
		},
	};
	let res;
	try {
		// api call
		const api = axioInstance(config);
		res = await api;
	} catch (error) {
		return dataErrorHandler(error);
	}
	return {
		data: res?.data,
	};
};

// handles api call for shortening the url
export const shortenurl = async (
	state: shortenState | undefined,
	formData: url
): Promise<shortenState> => {
	// handles getting the session object
	const session = await getSession();
	// request config
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
		// api call
		const api = axioInstance(config);
		res = await api;
	} catch (error) {
		return errorHandler(error);
	}
	// handles revalidating the specified path to get up to date data
	revalidatePath('/dasboard');
	return {
		status: 'success',
		message: res.data?.status,
	};
};
