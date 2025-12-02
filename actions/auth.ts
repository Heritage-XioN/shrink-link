'use server';
import axios from 'axios';
import { axioInstance } from '../lib/axiosInstance';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

type signup = {
	email: string;
	password: string;
};

type login = {
	username: string;
	password: string;
};

type formState = {
	status: 'success' | 'error';
	message: string;
};

export const handleSignup = async (
	state: formState | undefined,
	formData: signup
): Promise<formState> => {
	const config = {
		url: '/auth/register',
		method: 'post',
		data: formData,
		headers: {
			'content-type': 'application/json',
		},
	};

	try {
		const api = axioInstance(config);
		const res = await api;
		return {
			status: 'success',
			message: res.data.status,
		};
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
};

export const handlelogin = async (
	state: formState | undefined,
	formData: login
): Promise<formState> => {
	const data = new FormData();
	data.append('username', formData.username);
	data.append('password', formData.password);
	const config = {
		url: '/auth/login',
		method: 'post',
		data: data,
	};

	try {
		const api = axioInstance(config);
		const res = await api;

		const session = await getSession();
		session.isLoggedin = true;
		session.token = res.data.access_token;
		session.tokenType = res.data.token_type;
		await session.save();
		console.log(session)
		
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
	const session = await getSession();
	if(session.token){
		console.log("second")
		redirect('/dashboard');
	}
	return {
		status: 'success',
		message: 'success',
	};
};
