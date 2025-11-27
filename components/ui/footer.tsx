import Link from 'next/link';
import Logo from './logo';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
	return (
		<div className='flex flex-wrap gap-8 px-8 py-8 md:px-20 mt-12 bg-[#FAFAFBFF] shadow'>
			<div className='grow shrink basis-full md:basis-auto '>
				<div className='flex justify-center items-center md:justify-start md:items-start'>
					<div className='flex justify-center items-center'>
						<div className='w-9 h-9 mr-2 bg-[#A667E4FF] flex justify-center items-center rounded-[7px]'>
							<Logo style='text-[#FFFFFFFF]' />
						</div>
						<div className=''>
							<h1 className='text-[23px] leading-[23px] font-bold text-[#A667E4FF]'>
								ShrinkLink
							</h1>
						</div>
					</div>
				</div>
				<div className='my-4'>
					<p className='text-[14px] leading-5 font-normal text-[#565D6DFF] '>
						Shorten, track, and share your links with ease.
					</p>
				</div>
				<div className='flex gap-4'>
					<div className=''>
						<FiGithub className='w-10 h-10 text-[#565D6DFF]' />
					</div>
					<div className=''>
						<FaXTwitter className='w-10 h-10 text-[#565D6DFF]' />
					</div>
					<div className=''>
						<FiLinkedin className='w-10 h-10 text-[#565D6DFF]' />
					</div>
				</div>
			</div>
			<div className='grow shrink basis-full md:basis-auto '>
				<div className='mb-4'>
					<h1 className='text-[18px] leading-7 font-semibold text-[#171A1FFF]'>
						Company
					</h1>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						About Us
					</Link>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Careers
					</Link>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Contact
					</Link>
				</div>
			</div>
			<div className='grow shrink basis-full md:basis-auto '>
				<div className='mb-4'>
					<h1 className='text-[18px] leading-7 font-semibold text-[#171A1FFF]'>
						Resources
					</h1>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Blog
					</Link>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Support
					</Link>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Developers
					</Link>
				</div>
			</div>
			<div className='grow shrink basis-full md:basis-auto '>
				<div className='mb-4'>
					<h1 className='text-[18px] leading-7 font-semibold text-[#171A1FFF]'>
						Legal
					</h1>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Privacy Policy
					</Link>
				</div>
				<div className=''>
					<Link
						href={''}
						className='text-[16px] leading-6 font-normal text-[#565D6DFF]'
					>
						Terms of Service
					</Link>
				</div>
			</div>
			<div className='w-full border bg-[#F3F4F6FF] grow shrink basis-full '></div>
			<div className='grow shrink basis-full  flex justify-center items-center'>
				<p className='text-[14px] leading-5 font-normal text-center'>
					© 2025 ShrinkLink. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
