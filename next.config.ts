import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			new URL('https://res.cloudinary.com/ddg2pxgz0/**'),
		],
	},
	reactCompiler: true,
	cacheComponents: true,
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
