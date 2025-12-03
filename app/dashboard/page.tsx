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

	if (!links?.data) {
		return (
			<div>
				<ShortenUrl
					header='Shorten Your Link'
					placeholder='https://example.com/very/long/url'
					buttonText='Shorten URL'
				/>
				<div className="w-full mb-6">
					<p className="text-center font-semibold"> No links avaliable yet pls shorten</p>
				</div>
			</div>
		);
	}

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
			<div className='flex flex-wrap w-full gap-2'>
				<div className='grow shrink basis-auto flex flex-wrap justify-center items-center mb-4 w-full'>
					<h1 className='text-[30px] leading-9 font-bold text-[#171A1FFF] text-center'>
						My Shortened Links
					</h1>
				</div>
				<div className='grow shrink basis-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2'>
					{data}
				</div>
			</div>
		</div>
	);
};

export default Page;
