'use server';
import { errorHandler } from '@/lib/error';
import { axioInstance } from '../lib/axiosInstance';
import { destroySession, getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { formState, login, signup } from '@/lib/types';

// handles logout
export async function handleLogout() {
	await destroySession();
	redirect('/auth/login');
}

// handles signup api call
export const handleSignup = async (
	state: formState | undefined,
	formData: signup
): Promise<formState> => {
	// api config data
	const config = {
		url: '/auth/register',
		method: 'post',
		data: formData,
		headers: {
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
	// checks if status equals success and redirects to login page
	if (res?.data?.status === 'success') {
		redirect('/auth/login');
	}
	return {
		status: 'success',
		message: 'success',
	};
};

// handles login api call
export const handlelogin = async (
	state: formState | undefined,
	formData: login
): Promise<formState> => {
	// converting the formData to a FormData object
	const data = new FormData();
	data.append('username', formData.username);
	data.append('password', formData.password);
	// api config data
	const config = {
		url: '/auth/login',
		method: 'post',
		data: data,
	};
	let res;
	try {
		//api call
		const api = axioInstance(config);
		res = await api;
		//create the session data
		const session = await getSession();
		session.isLoggedin = true;
		session.token = res.data.access_token;
		session.tokenType = res.data.token_type;
		await session.save();
	} catch (error) {
		return errorHandler(error);
	}
	// checks if token exists in session and redirects to dashboard if truthy
	const session = await getSession();
	if (session.token) {
		console.log('second');
		redirect('/dashboard');
	}
	return {
		status: 'success',
		message: 'success',
	};
};
