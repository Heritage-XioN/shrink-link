import Link from 'next/link';
import React from 'react';

const SectionFour = () => {
	return (
		<div className='px-8 md:py-4 md:px-20 md:my-10 mt-12'>
			<div className='w-full bg-[#A667E41A] rounded-3xl shadow p-6 md:px-12 md:py-24 flex flex-wrap md:bg-[#A667E4FF]'>
				<div className='grow shrink basis-auto my-4 flex justify-center items-center'>
					<h1 className='text-2xl leading-8 font-bold text-[#A667E4FF] text-center md:text-4xl md:leading-10 md:text-[#FFFFFFFF]'>
						Ready to streamline your links?
					</h1>
				</div>
				<div className='grow shrink basis-auto my-4 flex justify-center items-center'>
					<p className='text-[16px] leading-6 font-normal text-[#A667E4FF] text-center md:text-[18px] md:leading-7 md:text-[#FFFFFFFF]'>
						Join ShrinkLink today and unlock powerful link management.
					</p>
				</div>
				<div className='grow shrink basis-full my-4 flex justify-center items-center'>
					<Link
						href={''}
						className='text-[16px] leading-[26px] font-semibold text-[#FFFFFFFF] bg-[#A667E4FF] px-5 py-3 md:px-7 md:py-4 rounded-2xl shadow md:text-[20px] md:leading-8 md:font-bold md:bg-[#F3F4F6FF] md:text-[#1E2128FF] md:hover:bg-[#F3F4F6FF] md:hover:text-[#1E2128FF] md:hover:active:bg-[#F3F4F6FF] md:hover:active:text-[#F3F4F6FF] hover:bg-[#A667E4FF] hover:text-[#FFFFFFFF] hover:active:bg-[#FFFFFFFF] hover:active:text-[#A667E4FF]'
					>
						Sign Up Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SectionFour;
