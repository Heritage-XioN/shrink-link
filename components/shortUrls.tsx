import Link from 'next/link';
import CopyIcon from './ui/copy';
import ShareIcon from './ui/share';
import { ChartNoAxesColumn } from 'lucide-react';
import { CalendarDays } from 'lucide-react';

type shortlinks = {
	original_url: string;
	Shortened_url: string;
	clicks: number;
	created_at: string;
};

const ShortUrls = ({
	original_url,
	Shortened_url,
	clicks,
	created_at,
}: shortlinks) => {
	const isoString = created_at;

	// Parse into a Date object
	const date = new Date(isoString);

	// Format to YYYY-MM-DD
	const shortDate = date.toISOString().split('T')[0];

	return (
		<div className='rounded shadow flex flex-wrap px-4 py-4 gap-4'>
			<div className='grow shrink basis-auto flex flex-wrap'>
				<div className='grow shrink basis-auto'>
					<h1 className='text-[16px] leading-7 font-bold '>Original URL</h1>
				</div>
				<div className='grow shrink basis-full'>
					<p className='text-[14px] leading-6 font-normal text-[#6B7280FF] word-break break-all line-clamp-2 h-12'>
						{original_url}
					</p>
				</div>
			</div>
			<div className='grow shrink basis-full flex flex-wrap justify-between'>
				<div className='grow shrink basis-auto flex justify-start items-center gap-2'>
					<Link href={Shortened_url} className='text-[16px] leading-6 font-semibold text-[#A667E4FF] text-center truncate w-40'>
						{Shortened_url}
					</Link>
				</div>
				<div className='grow shrink basis-auto flex justify-end gap-2'>
					<ShareIcon url={Shortened_url} />
					<CopyIcon url={Shortened_url} />
				</div>
			</div>
			<div className='grow shrink basis-full flex justify-between'>
				<div className='flex gap-1'>
					<div className='flex justify-center items-center'>
						<ChartNoAxesColumn className='w-4 h-4' />
					</div>
					<div className=''>
						<p className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
							{clicks} Clicks
						</p>
					</div>
				</div>
				<div className='flex gap-1'>
					<div className='flex justify-center items-center'>
						<CalendarDays className='w-4 h-4' />
					</div>
					<div className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
						Created: {shortDate}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShortUrls;
