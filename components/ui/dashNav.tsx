import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashNav = () => {
	return (
		<div className='fixed top-0 px-8 py-4 flex justify-end w-full'>
			<div className='ml-4'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default DashNav;
