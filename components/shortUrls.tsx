import CopyIcon from './ui/copy';
import ShareIcon from './ui/share';
import { ChartNoAxesColumn } from 'lucide-react';
import { CalendarDays } from 'lucide-react';

const ShortUrls = () => {
	return (
		<div className='flex flex-wrap w-full gap-2'>
			<div className='grow shrink basis-auto flex flex-wrap justify-center items-center mb-4 w-full'>
				<h1 className='text-[30px] leading-9 font-bold text-[#171A1FFF] text-center'>
					My Shortened Links
				</h1>
			</div>
			<div className='grow shrink basis-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2'>
				<div className='rounded shadow flex flex-wrap px-4 py-4 gap-4'>
					<div className='grow shrink basis-auto flex flex-wrap'>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[16px] leading-7 font-bold '>Original URL</h1>
						</div>
						<div className='grow shrink basis-full'>
							<p className='text-[14px] leading-6 font-normal text-[#6B7280FF] word-break break-all'>
								https://www.example.com/very/long/url/that/needs/to/be/shortened/for/better/sharing/and/tracking
							</p>
						</div>
					</div>
					<div className='grow shrink basis-full flex flex-wrap justify-between'>
						<div className='grow shrink basis-auto flex justify-start items-center gap-2'>
							<p className='text-[16px] leading-6 font-semibold text-[#A667E4FF] text-center'>
								shrink.link/ex1
							</p>
						</div>
						<div className='grow shrink basis-auto flex justify-end gap-2'>
							<ShareIcon />
							<CopyIcon />
						</div>
					</div>
					<div className='grow shrink basis-full flex justify-between'>
						<div className='flex gap-1'>
							<div className='flex justify-center items-center'>
								<ChartNoAxesColumn className='w-4 h-4' />
							</div>
							<div className=''>
								<p className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
									1250 Clicks
								</p>
							</div>
						</div>
						<div className='flex gap-1'>
							<div className='flex justify-center items-center'>
								<CalendarDays className='w-4 h-4' />
							</div>
							<div className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
								Created: 2023-10-26
							</div>
						</div>
					</div>
				</div>
				<div className='rounded shadow flex flex-wrap px-4 py-4 gap-4'>
					<div className='grow shrink basis-auto flex flex-wrap'>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[16px] leading-7 font-bold '>Original URL</h1>
						</div>
						<div className='grow shrink basis-full'>
							<p className='text-[14px] leading-6 font-normal text-[#6B7280FF] word-break break-all'>
								https://www.example.com/very/long/url/that/needs/to/be/shortened/for/better/sharing/and/tracking
							</p>
						</div>
					</div>
					<div className='grow shrink basis-full flex flex-wrap justify-between'>
						<div className='grow shrink basis-auto flex justify-start items-center gap-2'>
							<p className='text-[16px] leading-6 font-semibold text-[#A667E4FF] text-center'>
								shrink.link/ex1
							</p>
						</div>
						<div className='grow shrink basis-auto flex justify-end gap-2'>
							<ShareIcon />
							<CopyIcon />
						</div>
					</div>
					<div className='grow shrink basis-full flex justify-between'>
						<div className='flex gap-1'>
							<div className='flex justify-center items-center'>
								<ChartNoAxesColumn className='w-4 h-4' />
							</div>
							<div className=''>
								<p className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
									1250 Clicks
								</p>
							</div>
						</div>
						<div className='flex gap-1'>
							<div className='flex justify-center items-center'>
								<CalendarDays className='w-4 h-4' />
							</div>
							<div className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
								Created: 2023-10-26
							</div>
						</div>
					</div>
				</div>
				<div className='rounded shadow flex flex-wrap px-4 py-4 gap-4'>
					<div className='grow shrink basis-auto flex flex-wrap'>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[16px] leading-7 font-bold '>Original URL</h1>
						</div>
						<div className='grow shrink basis-full'>
							<p className='text-[14px] leading-6 font-normal text-[#6B7280FF] word-break break-all'>
								https://www.example.com/very/long/url/that/needs/to/be/shortened/for/better/sharing/and/tracking
							</p>
						</div>
					</div>
					<div className='grow shrink basis-full flex flex-wrap justify-between'>
						<div className='grow shrink basis-auto flex justify-start items-center gap-2'>
							<p className='text-[16px] leading-6 font-semibold text-[#A667E4FF] text-center'>
								shrink.link/ex1
							</p>
						</div>
						<div className='grow shrink basis-auto flex justify-end gap-2'>
							<ShareIcon />
							<CopyIcon />
						</div>
					</div>
					<div className='grow shrink basis-full flex justify-between'>
						<div className='flex gap-1'>
							<div className='flex justify-center items-center'>
								<ChartNoAxesColumn className='w-4 h-4' />
							</div>
							<div className=''>
								<p className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
									1250 Clicks
								</p>
							</div>
						</div>
						<div className='flex gap-1'>
							<div className='flex justify-center items-center'>
								<CalendarDays className='w-4 h-4' />
							</div>
							<div className='text-[14px] leading-5 font-normal text-[#565D6DFF]'>
								Created: 2023-10-26
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShortUrls;
