// type for signup data
export type signup = {
	email: string;
	password: string;
};

// type for login data
export type login = {
	username: string;
	password: string;
};

// type for form state
export type formState = {
	status: string;
	message: string;
};

// type for shortening url
export type url = {
	original_url: string;
};

// type union for shortened urls response
export type urlsState =
	| {
			data: [
				{
					id: number;
					original_url: string;
					Shortened_url: string;
					clicks: number;
					created_at: string;
				}
			];
	  }
	| { status: string; message: string; data:[] | undefined}; 

// type for shorten url form/response state
export type shortenState = {
	status: string;
	message: string;
};

// type for cookies/session data
export type SessionData = {
	isLoggedin: boolean;
	tokenType: string;
	token: string;
};

// type for error response
export type errorResponse =
	| {
			response: string;
	  }
	| unknown;
