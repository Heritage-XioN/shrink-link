import Link from 'next/link'
import { Menu } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import React from 'react'

const Navbar = () => {
  return (
		<div className='flex justify-between flex-wrap bg-[#A667E4FF] w-full py-6 px-5'>
			<div className='flex grow shrink basis-auto '>
				<nav className='h-9 w-9 bg-white rounded mr-2'></nav>
				<nav className='h-9 flex justify-center items-center'>
					<Link href={'/'} className='text-2xl leading-6 font-bold text-white text-center'>
						shrinklink
					</Link>
				</nav>
			</div>
			<div className='flex justify-end items-center grow shrink basis-auto '>
				<div className='h-9 w-9'>
					<Popover>
						<PopoverTrigger className=' h-full w-full'><Menu className='w-full h-full text-white'/></PopoverTrigger>
						<PopoverContent>Place content for the popover here.</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
}

export default Navbar