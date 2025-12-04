declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BACKEND_URL: string;
			RAND_KEY: string;
			COOKIE_HTTP_ONLY: true;
			COOKIE_SAME_SITEstring;
			COOKIE_MAX_AGE: number;
			NODE_ENV: string;
			GITHUB_ID: string;
			GITHUB_SECRET: string;
		}
	}
}
