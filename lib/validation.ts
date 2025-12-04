import * as z from 'zod';

// form validation schema for signup
export const signupSchema = z.object({
	email: z.email('Invalid email address'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.max(128, 'Password must be less than 128 characters')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[0-9]/, 'Password must contain at least one number')
		.regex(
			/[^A-Za-z0-9]/,
			'Password must contain at least one special character'
		),
});

// form validation schema for login
export const loginSchema = z.object({
	username: z.email('Invalid email address'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.max(128, 'Password must be less than 128 characters')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[0-9]/, 'Password must contain at least one number')
		.regex(
			/[^A-Za-z0-9]/,
			'Password must contain at least one special character'
		),
});

// form validation schema for shortening a url
export const UrlSchema = z.object({
	original_url: z.url(),
});

