import { fetchLinks } from '@/actions/links';
import ShortenUrl from '@/components/shortenUrl';
import ShortUrls from '@/components/shortUrls';
import React from 'react';

const Page = async () => {
	const links = await fetchLinks();
	const data = links.data.map((item) => {
		return <ShortUrls key={item.id} {...item} />;
	});
	return (
		<div>
			<ShortenUrl
				header='search for Your Link'
				placeholder='https://example.com/very/long/url'
				buttonText='search URL'
			/>
			{data}
		</div>
	);
};

export default Page;
