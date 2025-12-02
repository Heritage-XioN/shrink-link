import { fetchLinks } from '@/actions/links';
import ShortenUrl from '@/components/shortenUrl';
import ShortUrls from '@/components/shortUrls';

type formState = {
	data: [
		{
			id: number;
			original_url: string;
			short_url: string;
			clicks: number;
			created_at: string;
		}
	];
};

const Page = async () => {
	const links = await fetchLinks()
	const data = links.data.map((item) => {
		return <ShortUrls key={item.id} {...item} />;
	});
	return (
		<div>
			<ShortenUrl
				header='Shorten Your Link'
				placeholder='https://example.com/very/long/url'
				buttonText='Shorten URL'
			/>
			{data}
		</div>
	);
};

export default Page;
