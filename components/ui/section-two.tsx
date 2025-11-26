import React from 'react';
import { Share2, ChartNoAxesColumn, Link } from 'lucide-react';

const SectionTwo = () => {
	return (
		<div className='px-4 md:py-4 md:px-20 md:my-10'>
			<div className='flex flex-wrap md:hidden bg-[#FAFAFBFF] w-full rounded-4xl py-6 px-4 shadow'>
				<div className='grow shrink basis-auto my-4'>
					<h1 className='text-2xl font-bold leading-[30px] text-[#171A1FFF] text-center'>
						Why ShrinkLink?
					</h1>
				</div>
				<div className='grow shrink basis-auto flex flex-wrap gap-8 mt-6'>
					<div className='grow shrink basis-auto  bg-[#FFFFFFFF] rounded-2xl shadow px-4 py-4 '>
						<div className='grow shrink basis-auto text-center my-2'>
							<div className='grow shrink basis-auto flex justify-center items-center my-4'>
								<div className='flex justify-center items-center bg-[#A667E41A] w-16 h-16 rounded-full'>
									<Link className='w-10 h-10 text-[#A667E4FF]' />
								</div>
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[18px] leading-6 font-semibold text-[#171A1FFF] text-center my-2'>
								Instant Shortening
							</h1>
						</div>
						<div className='grow shrink basis-auto my-2'>
							<p className='text-[14px] leading-5 font-normal text-[#565D6DFF] text-center'>
								Transform long URLs into concise, shareable links in a flash.
							</p>
						</div>
					</div>
					<div className='grow shrink basis-auto  bg-[#FFFFFFFF] rounded-2xl shadow px-4 py-4 '>
						<div className='grow shrink basis-auto text-center my-2'>
							<div className='grow shrink basis-auto flex justify-center items-center my-4'>
								<div className='flex justify-center items-center bg-[#A667E41A] w-16 h-16 rounded-full'>
									<ChartNoAxesColumn className='w-10 h-10 text-[#A667E4FF]' />
								</div>
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[18px] leading-6 font-semibold text-[#171A1FFF] text-center my-2'>
								Powerful Analytics
							</h1>
						</div>
						<div className='grow shrink basis-auto my-2'>
							<p className='text-[14px] leading-5 font-normal text-[#565D6DFF] text-center'>
								Track clicks, demographics, and traffic sources for every link.
							</p>
						</div>
					</div>
					<div className='grow shrink basis-auto  bg-[#FFFFFFFF] rounded-2xl shadow px-4 py-4 '>
						<div className='grow shrink basis-auto text-center my-2'>
							<div className='grow shrink basis-auto flex justify-center items-center my-4'>
								<div className='flex justify-center items-center bg-[#A667E41A] w-16 h-16 rounded-full'>
									<Share2 className='w-10 h-10 text-[#A667E4FF]' />
								</div>
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[18px] leading-6 font-semibold text-[#171A1FFF] text-center my-2'>
								Seamless Sharing
							</h1>
						</div>
						<div className='grow shrink basis-auto my-2'>
							<p className='text-[14px] leading-5 font-normal text-[#565D6DFF] text-center'>
								Easily share your new links across all platforms.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden md:flex md:flex-row md:flex-wrap bg-[#FAFAFBFF] w-full rounded-4xl py-24 px-3 shadow'>
				<div className='grow shrink basis-auto my-8'>
					<h1 className='text-4xl font-bold leading-10 text-[#171A1FFF] text-center'>
						Why Choose ShrinkLink?
					</h1>
				</div>
				<div className='grow shrink basis-auto flex gap-8 px-8 mt-6'>
					<div className='grow w-full shrink basis-auto  bg-[#FFFFFFFF] rounded-2xl shadow px-6 py-6 '>
						<div className='grow shrink basis-auto flex justify-center items-center my-4'>
							<div className='flex justify-center items-center bg-[#A667E41A] w-16 h-16 rounded-full'>
								<ChartNoAxesColumn className='w-10 h-10 text-[#A667E4FF]' />
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[20px] leading-7 font-semibold text-[#171A1FFF] text-center my-2'>
								Advanced Analytics
							</h1>
						</div>
						<div className='grow shrink basis-auto my-2'>
							<p className='text-[16px] leading-6 font-normal text-[#565D6DFF] text-center my-4 lg:px-8'>
								Track clicks, demographics, and referrers for every link.
							</p>
						</div>
					</div>
					<div className='grow w-full shrink basis-auto  bg-[#FFFFFFFF] rounded-2xl shadow px-6 py-6  '>
						<div className='grow shrink basis-auto flex justify-center items-center my-4'>
							<div className='flex justify-center items-center bg-[#A667E41A] w-16 h-16 rounded-full'>
								<Link className='w-10 h-10 text-[#A667E4FF]' />
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[20px] leading-7 font-semibold text-[#171A1FFF] text-center my-2'>
								Custom Short Links
							</h1>
						</div>
						<div className='grow shrink basis-auto my-2'>
							<p className='text-[16px] leading-6 font-normal text-[#565D6DFF] text-center my-4 lg:px-8'>
								Personalize your shortened URLs for better branding and
								memorability.
							</p>
						</div>
					</div>
					<div className='grow w-full shrink basis-auto  bg-[#FFFFFFFF] rounded-2xl shadow px-6 py-6 '>
						<div className='grow shrink basis-auto flex justify-center items-center my-4'>
							<div className='flex justify-center items-center bg-[#A667E41A] w-16 h-16 rounded-full'>
								<Share2 className='w-10 h-10 text-[#A667E4FF]' />
							</div>
						</div>
						<div className='grow shrink basis-auto my-4'>
							<h1 className='text-[20px] leading-7 font-semibold text-[#171A1FFF] text-center my-2'>
								Easy Sharing
							</h1>
						</div>
						<div className='grow shrink basis-auto my-2'>
							<p className='text-[16px] leading-6 font-normal text-[#565D6DFF] text-center my-4 lg:px-8'>
								Seamlessly share your links across social media and other
								platforms.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
