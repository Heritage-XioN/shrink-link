import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [new URL('https://assets.aceternity.com/pro/**')],
	},
	reactCompiler: true,
	cacheComponents: true,
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
