import { FetchAllLinks } from '@/actions/links';
import ShortUrls from '@/components/shortUrls';
import { verifySession } from '@/lib/dal';
import React from 'react';

const Page = async () => {
	// extra check for making sure user is logged in
	verifySession();
	const links = await FetchAllLinks();

	if (!links?.data) {
		return (
			<div className='mt-8'>
				<div className='flex flex-wrap w-full gap-2'>
					<div className='grow shrink basis-auto flex flex-wrap justify-center items-center mb-4 w-full'>
						<h1 className='text-[30px] leading-9 font-bold text-[#171A1FFF] text-center'>
							My Shortened Links
						</h1>
					</div>
					<div className='w-full mb-6'>
						<p className='text-center font-semibold'>
							No links avaliable yet pls shorten
						</p>
					</div>
				</div>
			</div>
		);
	}

	const data = links.data.map((item) => {
		return <ShortUrls key={item.id} {...item} />
	});
	return (
		<div className='mt-8'>
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
