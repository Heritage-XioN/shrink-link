import ShortenUrl from '@/components/shortenUrl';
import ShortUrls from '@/components/shortUrls';
import React from 'react'

const Page = () => {
  return (
		<div>
			<ShortenUrl
				header='search for Your Link'
				placeholder='https://example.com/very/long/url'
				buttonText='search URL'
			/>
			<ShortUrls />
		</div>
	);
}

export default Page