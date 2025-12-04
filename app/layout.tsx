import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: 'shrink link',
	description: 'Shorten Your Links, Expsnd Your Reach',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest'></link>

        {/*i generated the following settings with ai so review */}
				{/* Basic SEO */}
				<title>Shrinklink | Free & Fast URL Shortener</title>
				<meta
					name='description'
					content='Shrinklink is a free, fast, and secure URL shortener. Shorten long links, track clicks, and share smarter.'
				/>
				<meta
					name='keywords'
					content='URL shortener, shrinklink, link shortener, shorten URLs, track links, free URL shortener'
				/>
				<meta name='author' content='Shrinklink' />

				{/* Open Graph (Facebook, LinkedIn, etc.) */}
				<meta
					property='og:title'
					content='Shrinklink | Free & Fast URL Shortener'
				/>
				<meta
					property='og:description'
					content='Shorten long links instantly with Shrinklink. Simple, secure, and trackable.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://shrinklink.com' />
				<meta
					property='og:image'
					content='https://shrinklink.com/og-image.png'
				/>

				{/* Twitter Card */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Shrinklink | Free & Fast URL Shortener'
				/>
				<meta
					name='twitter:description'
					content='Shrinklink makes sharing links smarter. Shorten, customize, and track your URLs.'
				/>
				<meta
					name='twitter:image'
					content='https://shrinklink.com/twitter-image.png'
				/>

				{/* Mobile & PWA */}
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
