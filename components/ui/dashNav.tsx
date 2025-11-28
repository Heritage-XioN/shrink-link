import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from './sidebar';

const DashNav = () => {
	return (
		<div className='fixed top-0 px-8 py-2 flex justify-between w-full backdrop-blur-md bg-[#A667E41A]/75'>
			<div className='flex justify-center items-center'>
				<SidebarTrigger className='lg:hidden w-10 h-10 hover:bg-[#A667E41A] bg-[#A667E41A] hover:text-[#A667E4FF] text-[#A667E4FF]' />
			</div>
			<div className='ml-4 mt-1'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default DashNav;
