import ShortenUrl from '@/components/ui/shortenUrl';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'

const Page = () => {
  return (
		<div>
			<SidebarTrigger className='md:hidden' />
			<ShortenUrl />
		</div>
	);
}

export default Page