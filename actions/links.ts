'use server';
import axios from 'axios';
import { axioInstance } from '../lib/axiosInstance';
import { getSession } from '@/lib/session';

type signup = {
	email: string;
	password: string;
};

type login = {
	username: string;
	password: string;
};

type formState = {
	data: [
		{
			id: number;
			original_url: string;
			short_url: string;
			clicks: number;
			created_at: string;
		}
	];
};

export const fetchLinks = async (): Promise<formState> => {
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
