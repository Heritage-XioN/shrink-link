import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import { axioInstance } from '@/lib/axiosInstance';
import axios from 'axios';

type login = {
	username: string;
	password: string;
};

type formState = {
	status: 'success' | 'error';
	message: string;
};

//TODO: implement social login
export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: (process.env.GITHUB_ID = ''),
			clientSecret: (process.env.GITHUB_SECRET = ''),
		}),
		FacebookProvider({
			clientId: (process.env.FACEBOOK_CLIENT_ID = ''),
			clientSecret: (process.env.FACEBOOK_CLIENT_SECRET = ''),
		}),
	],
};

export default NextAuth(authOptions);
