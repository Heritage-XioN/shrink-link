export type signup = {
	email: string;
	password: string;
};

export type login = {
	username: string;
	password: string;
};

export type formState = {
	status: 'success' | 'error';
	message: string;
};


export type url = {
    original_url: string;
};

export type urlsState = {
    data: [
        {
            id: number;
            original_url: string;
            Shortened_url: string;
            clicks: number;
            created_at: string;
        }
    ];
};


export type shortenState = {
    status: 'success' | 'error';
    message: string;
};

export type SessionData = {
	isLoggedin: boolean;
	tokenType: string;
	token: string;
	// add other fields as needed, e.g. userId, role, etc.
};
