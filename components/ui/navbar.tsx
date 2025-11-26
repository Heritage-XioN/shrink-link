import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import React from 'react';

const Navbar = () => {
	return (
		<div className='flex fixed z-50 top-0 justify-between flex-wrap bg-[#A667E4FF] w-full py-6 px-5'>
			<div className='flex grow shrink basis-auto'>
				<nav className='h-9 w-9 bg-white rounded mr-2'></nav>
				<nav className='h-9 flex justify-center items-center'>
					<Link
						href={'/'}
						className='text-2xl leading-6 font-bold text-white text-center'
					>
						shrinklink
					</Link>
				</nav>
			</div>
			<div className='lg:hidden flex justify-end items-center grow shrink basis-auto '>
				<div className='h-9 w-9'>
					<Popover>
						<PopoverTrigger className=' h-full w-full'>
							<Menu className='w-full h-full text-white' />
						</PopoverTrigger>
						<PopoverContent>Place content for the popover here.</PopoverContent>
					</Popover>
				</div>
			</div>
			<div className='hidden lg:flex justify-end items-center grow shrink basis-auto'>
				<div className='flex justify-center items-center w-28 ml-4'>
					<Link
						href={''}
						className='w-full text-center text-[14px] leading-5 font-bold px-2 py-2 text-[#FFFFFFFF] bg-transparent rounded opacity-100 hover:text-[#FFFFFFFF] hover:bg-transparent hover:active:text-[#FFFFFFFF] hover:active:bg-transparent'
					>
						Login
					</Link>
				</div>
				<div className='flex justify-center items-center w-28 ml-4'>
					<Link
						href={''}
						className='w-full text-center text-[14px] leading-5 font-bold px-2 py-2 bg-[#F3F4F6FF] rounded opacity-100 hover:text-[#1E2128FF] hover:bg-[#F3F4F6FF] hover:active:text-[#1E2128FF] hover:active:bg-[#F3F4F6FF]'
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
