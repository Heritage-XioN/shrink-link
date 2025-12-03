import 'server-only';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { SessionData } from './types';




const sessionOptions = {
	password: (process.env.RAND_KEY =
		'+Kc5Rwx/vxui9IcvebnkWAxGDCpvEEOv8UdeYsTlMRw='), //run openssl rand -base64 32 to generate a random pasaword
	cookieName: 'session',
	cookieOptions: {
		httpOnly: process.env.COOKIE_HTTP_ONLY === 'true',
		secure: process.env.NODE_ENV === 'production',
		sameSite: process.env.COOKIE_SAME_SITE as 'lax' | 'strict' | 'none',
		maxAge: Number(process.env.COOKIE_MAX_AGE ?? 60 * 60 * 24 * 7),
	},
};

export const defaultSession = {
	isLoggedin: false,
};

//handles creating the session
export async function getSession() {
	const session = await getIronSession<SessionData>(
		await cookies(),
		sessionOptions
	);

	// if(!session.isLoggedin){
	//   session.isLoggedin = defaultSession.isLoggedin
	// }

	return session;
}

//this should be used for logout
export async function destroySession() {
	const session = await getSession();
	session.destroy();
}
